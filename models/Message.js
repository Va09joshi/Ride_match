const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // Snapshot names (so UI loads fast even if user changes name later)
    senderName: {
      type: String,
      required: true,
    },

    receiverName: {
      type: String,
      required: true,
    },

    // Message Content
    message: {
      type: String,
    },

    // Message Type
    type: {
      type: String,
      enum: ['text', 'location'],
      default: 'text',
    },

    // Location if shared
    location: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
