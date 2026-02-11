const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const User = require('../models/user');

// GET chat history between two users
router.get('/:userA/:userB', async (req, res) => {
  const { userA, userB } = req.params;

  try {
    // Fetch messages between the two users
    const messages = await Message.find({
      $or: [
        { senderId: userA, receiverId: userB },
        { senderId: userB, receiverId: userA }
      ]
    }).sort({ timestamp: 1 }); // ascending order

    // Fetch both users in parallel
    const [user1, user2] = await Promise.all([
      User.findById(userA),
      User.findById(userB)
    ]);

    // Default names if not found
    const nameA = user1?.name || "Unknown";
    const nameB = user2?.name || "Unknown";
    const avatarA = user1?.profileImage || "https://i.pravatar.cc/150?img=1";
    const avatarB = user2?.profileImage || "https://i.pravatar.cc/150?img=2";

    // Format messages
    const formatted = messages.map(msg => ({
      senderId: msg.senderId,
      receiverId: msg.receiverId,
      message: msg.message,
      timestamp: msg.timestamp,
      senderName: msg.senderId.toString() === userA ? nameA : nameB,
      receiverName: msg.receiverId.toString() === userA ? nameA : nameB,
      senderAvatar: msg.senderId.toString() === userA ? avatarA : avatarB,
      receiverAvatar: msg.receiverId.toString() === userA ? avatarA : avatarB,
    }));

    res.json({ messages: formatted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching chat history' });
  }
});

module.exports = router;
