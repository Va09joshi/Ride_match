const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const Chat = require("../models/chat.js");
const User = require("../models/user.js");


// ================= SEND MESSAGE =================
router.post("/send", async (req, res) => {
  try {
    const { senderId, receiverId, message, type, location } = req.body;

    if (!senderId || !receiverId)
      return res.status(400).json({ success: false, message: "Missing users" });

    // 🔹 Get user names for snapshot
    const sender = await User.findById(senderId).select("name");
    const receiver = await User.findById(receiverId).select("name");

    if (!sender || !receiver)
      return res.status(404).json({ success: false, message: "User not found" });

    // 🔹 Find or create chat
    let chat = await Chat.findOne({ users: { $all: [senderId, receiverId] } });

    if (!chat) {
      chat = await Chat.create({
        users: [senderId, receiverId],
        userNames: {
          [senderId]: sender.name,
          [receiverId]: receiver.name,
        },
        unreadCount: {
          [senderId]: 0,
          [receiverId]: 0,
        },
      });
    }

    // 🔹 Create message
    const newMessage = await Message.create({
      chatId: chat._id,
      senderId,
      receiverId,
      senderName: sender.name,
      receiverName: receiver.name,
      message,
      type: type || "text",
      location: type === "location" ? location : undefined,
    });

    // 🔹 Update chat preview + unread count
    chat.lastMessage = message || "📍 Location shared";
    chat.lastMessageTime = new Date();

    const unread = chat.unreadCount.get(receiverId.toString()) || 0;
    chat.unreadCount.set(receiverId.toString(), unread + 1);

    await chat.save();

    // 🔹 Real-time emit (if socket.io attached in app.js)
    const io = req.app.get("io");
    if (io) {
      io.to(receiverId.toString()).emit("receiveMessage", newMessage);
    }

    res.json({ success: true, data: newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});


// ================= GET CHAT MESSAGES =================
router.get("/:userId/:receiverId", async (req, res) => {
  try {
    const { userId, receiverId } = req.params;

    const chat = await Chat.findOne({ users: { $all: [userId, receiverId] } });
    if (!chat) return res.json([]);

    const messages = await Message.find({ chatId: chat._id })
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// ================= MARK CHAT AS READ =================
router.put("/read/:chatId/:userId", async (req, res) => {
  try {
    const { chatId, userId } = req.params;

    const chat = await Chat.findById(chatId);
    if (!chat) return res.status(404).json({ success: false });

    chat.unreadCount.set(userId.toString(), 0);
    await chat.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// ================= SEND AUTO INTRO MESSAGE =================
router.post("/auto-intro", async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    if (!senderId || !receiverId || !message) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // 🔹 Fetch users
    const sender = await User.findById(senderId).select("name");
    const receiver = await User.findById(receiverId).select("name");

    if (!sender || !receiver) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // 🔹 Find or create chat
    let chat = await Chat.findOne({ users: { $all: [senderId, receiverId] } });

    if (!chat) {
      chat = await Chat.create({
        users: [senderId, receiverId],
        userNames: {
          [senderId]: sender.name,
          [receiverId]: receiver.name,
        },
        unreadCount: {
          [senderId]: 0,
          [receiverId]: 0,
        },
      });
    }

    // 🔹 Save intro message
    const introMessage = await Message.create({
      chatId: chat._id,
      senderId,
      receiverId,
      senderName: sender.name,
      receiverName: receiver.name,
      message,
      type: "text",
    });

    // 🔹 Update chat preview
    chat.lastMessage = message;
    chat.lastMessageTime = new Date();

    const unread = chat.unreadCount.get(receiverId.toString()) || 0;
    chat.unreadCount.set(receiverId.toString(), unread + 1);

    await chat.save();

    // 🔹 Emit real-time
    const io = req.app.get("io");
    if (io) {
      io.to(receiverId.toString()).emit("receiveMessage", introMessage);
    }

    res.json({ success: true, data: introMessage });
  } catch (err) {
    console.error("Auto intro error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});



module.exports = router;
