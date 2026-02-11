const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  users: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  ],

  userNames: {
    type: Map,
    of: String   // { userId: "Rahul" }
  },

  lastMessage: { type: String, default: "" },
  lastMessageTime: { type: Date, default: null },

  unreadCount: {
    type: Map,
    of: Number, // { userId: count }
    default: {},
  },
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);
