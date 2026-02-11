// ===========================
//       SERVER SETUP
// ===========================
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

// ===========================
//        MODELS
// ===========================
const User = require('./models/user');
const Message = require('./models/Message');
const Chat = require('./models/chat');

// ===========================
//         ROUTES
// ===========================
const authRoutes = require('./routes/auth');
const rideRoutes = require('./routes/ride');
const bookingRoutes = require('./routes/booking');
const profileRoutes = require('./routes/profileRoutes');
const chatRoutes = require('./routes/chats');
const chatHistoryRoutes = require('./routes/chathistory');
const notificationRoutes = require("./routes/notifications");
const likeRoutes = require("./routes/likeRoutes");
const messageRoutes = require("./routes/messageRoutes");
const rideRequestRoutes = require("./routes/rideRequestRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// ===========================
//       API ENDPOINTS
// ===========================
app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/chathistory', chatHistoryRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/ride-request', rideRequestRoutes);

app.get('/', (req, res) => {
    res.send('✅ Carpool Backend Running');
});

// ===========================
//     MONGODB CONNECTION
// ===========================
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// ===========================
//  HTTP + SOCKET.IO SETUP
// ===========================
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*', methods: ['GET', 'POST'] },
});

// Track online users
const onlineUsers = {};

// ===========================
//      SOCKET.IO EVENTS
// ===========================
io.on('connection', (socket) => {
    console.log('🟢 User connected:', socket.id);

    // Register user socket
    socket.on('register', (userId) => {
        onlineUsers[userId] = socket.id;
        console.log(`✅ User ${userId} registered with socket ${socket.id}`);
    });

    // ---------------------------
    // SEND MESSAGE
    // ---------------------------
    socket.on('sendMessage', async (data) => {
        const { senderId, receiverId, message } = data;
        console.log(`💬 ${senderId} -> ${receiverId}: ${message}`);

        try {
            const sender = await User.findById(senderId);
            const receiver = await User.findById(receiverId);
            if (!sender || !receiver) return console.log('❌ Sender or receiver not found');

            // Save message
            const newMessage = await Message.create({
                chatId: null, // will attach after chat is found/created
                senderId,
                senderName: sender.name,
                receiverId,
                receiverName: receiver.name,
                message,
            });

            // Find or create chat
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
                    lastMessage: message,
                    lastMessageTime: new Date(),
                });
            }

            // Update message with chatId
            newMessage.chatId = chat._id;
            await newMessage.save();

            // Update chat summary
            chat.lastMessage = message;
            chat.lastMessageTime = new Date();
            chat.unreadCount.set(receiverId.toString(), (chat.unreadCount.get(receiverId.toString()) || 0) + 1);
            await chat.save();

            // Emit to sender and receiver if online
            [senderId, receiverId].forEach(uid => {
                const socketId = onlineUsers[uid];
                if (socketId) {
                    io.to(socketId).emit('receiveMessage', {
                        senderId,
                        senderName: sender.name,
                        receiverId,
                        receiverName: receiver.name,
                        message,
                        timestamp: newMessage.createdAt,
                    });
                }
            });

        } catch (err) {
            console.error('❌ Error sending message:', err);
        }
    });

    // ---------------------------
    // DISCONNECT
    // ---------------------------
    socket.on('disconnect', () => {
        console.log('🔴 User disconnected:', socket.id);
        Object.keys(onlineUsers).forEach(uid => {
            if (onlineUsers[uid] === socket.id) delete onlineUsers[uid];
        });
    });
});

// ===========================
//       START SERVER
// ===========================
const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
