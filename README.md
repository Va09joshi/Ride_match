<div align="center">

# 𝗥𝗶𝗱𝗲𝗠𝗮𝘁𝗰𝗵

### Your Ultimate Carpool & Ridesharing Platform

<br/>

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white)

<br/>

![Dart](https://img.shields.io/badge/Dart-66.2%25-00ADD8?style=flat-square&logo=dart)
![JavaScript](https://img.shields.io/badge/JavaScript-20.6%25-F7DF1E?style=flat-square&logo=javascript)
![C++](https://img.shields.io/badge/C++-6.7%25-00599C?style=flat-square&logo=cplusplus)
![License](https://img.shields.io/github/license/Va09joshi/Ride_match?style=flat-square)
![Stars](https://img.shields.io/github/stars/Va09joshi/Ride_match?style=flat-square)

<br/>

A full-stack ridesharing application featuring real-time chat, location tracking,  
intelligent ride matching, and seamless payment integration

<br/>

**[𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀](#features)** • **[𝗧𝗲𝗰𝗵 𝗦𝘁𝗮𝗰𝗸](#tech-stack)** • **[𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝗮𝘁𝗶𝗼𝗻](#installation)** • **[𝗔𝗣𝗜 𝗗𝗼𝗰𝘀](#api-documentation)** • **[𝗖𝗼𝗻𝘁𝗿𝗶𝗯𝘂𝘁𝗲](#contributing)**

<br/>
<br/>

</div>

## 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀

<br/>

### 𝗔𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻 & 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆

• Secure JWT-based authentication system  
• Password encryption with bcrypt  
• Protected API endpoints with middleware

<br/>

### 𝗥𝗲𝗮𝗹-𝘁𝗶𝗺𝗲 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 & 𝗠𝗮𝗽𝗽𝗶𝗻𝗴

• Live GPS tracking with Google Maps integration  
• Distance calculation and route optimization  
• Interactive map interface

<br/>

### 𝗠𝗲𝘀𝘀𝗮𝗴𝗶𝗻𝗴 𝗦𝘆𝘀𝘁𝗲𝗺

• Real-time chat powered by Socket.IO  
• Message history and conversation threads  
• Online/offline status indicators

<br/>

### 𝗦𝗺𝗮𝗿𝘁 𝗥𝗶𝗱𝗲 𝗠𝗮𝘁𝗰𝗵𝗶𝗻𝗴

• Intelligent algorithm for ride recommendations  
• Filter by location, time, and preferences  
• Save and like favorite rides

<br/>

### 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗜𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻

• Secure payments via Razorpay  
• Transaction history tracking  
• Multiple payment methods support

<br/>

### 𝗨𝘀𝗲𝗿 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲

• Clean Material Design interface  
• Profile customization with image uploads  
• Rating and review system  
• Push notifications for ride updates

<br/>

### 𝗖𝗿𝗼𝘀𝘀-𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗦𝘂𝗽𝗽𝗼𝗿𝘁

• Native Android and iOS apps  
• Responsive web application  
• Consistent experience across devices

<br/>
<br/>

## 𝗧𝗲𝗰𝗵 𝗦𝘁𝗮𝗰𝗸

<br/>

### 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱

**Framework & Language**

• Flutter 3.9.2+  
• Dart

**Key Packages**

• `google_maps_flutter` — Maps and geolocation  
• `socket_io_client` — Real-time communication  
• `razorpay_flutter` — Payment processing  
• `geolocator` — GPS location services  
• `http` — API communication  
• `shared_preferences` — Local data storage  
• `image_picker` — Profile image selection  
• `cached_network_image` — Optimized image loading

<br/>

### 𝗕𝗮𝗰𝗸𝗲𝗻𝗱

**Runtime & Framework**

• Node.js  
• Express.js

**Database & ODM**

• MongoDB Atlas  
• Mongoose

**Key Packages**

• `socket.io` — WebSocket server  
• `jsonwebtoken` — JWT authentication  
• `bcryptjs` — Password hashing  
• `multer` — File upload handling  
• `cors` — Cross-origin resource sharing  
• `dotenv` — Environment configuration

<br/>
<br/>

## 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲

<br/>

```
Ride_match/
│
├── frontend/RideMatch/              # Flutter Application
│   ├── lib/
│   │   ├── main.dart                # Application entry point
│   │   ├── views/
│   │   │   ├── auth/                # Authentication screens
│   │   │   ���── dashboard/           # Main dashboard
│   │   │   ├── payment/             # Payment interface
│   │   │   ├── chat/                # Messaging interface
│   │   │   └── Splash/              # Splash screen
│   │   ├── models/                  # Data models
│   │   ├── services/                # API services
│   │   └── widgets/                 # Reusable components
│   ├── android/
│   ├── ios/
│   └── pubspec.yaml
│
├── backend/                         # Node.js Server
│   ├── server.js                    # Server entry point
│   ├── models/                      # Database schemas
│   │   ├── user.js
│   │   ├── Message.js
│   │   ├── chat.js
│   │   └── ride.js
│   ├── routes/                      # API endpoints
│   │   ├── auth.js
│   │   ├── ride.js
│   │   ├── booking.js
│   │   ├── chats.js
│   │   └── profileRoutes.js
│   ├── controllers/                 # Business logic
│   ├── middleware/                  # Authentication & validation
│   └── config/                      # Configuration files
│
└── package.json
```

<br/>
<br/>

## 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝗮𝘁𝗶𝗼��

<br/>

### 𝗣𝗿𝗲𝗿𝗲𝗾𝘂𝗶𝘀𝗶𝘁𝗲𝘀

Ensure you have the following installed:

• **Node.js** v16 or higher  
• **Flutter** v3.9.2 or higher  
• **MongoDB** (local or Atlas account)  
• **Git**

<br/>

### 𝗦𝘁𝗲𝗽 𝟭: 𝗖𝗹𝗼𝗻𝗲 𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝘆

```bash
git clone https://github.com/Va09joshi/Ride_match.git
cd Ride_match
```

<br/>

### 𝗦𝘁𝗲𝗽 𝟮: 𝗕𝗮𝗰𝗸𝗲𝗻𝗱 𝗦𝗲𝘁𝘂𝗽

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ridematch

# Authentication
JWT_SECRET=your_super_secret_key_minimum_32_characters

# Server
PORT=5000
NODE_ENV=development

# Image Upload
IMGBB_API_KEY=your_imgbb_api_key

# SMS (Optional)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890
```

<br/>

### 𝗦𝘁𝗲𝗽 𝟯: 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗦𝗲𝘁𝘂𝗽

```bash
cd frontend/RideMatch

# Get dependencies
flutter pub get

# Generate launcher icons (optional)
flutter pub run flutter_launcher_icons:main
```

<br/>

### 𝗦𝘁𝗲𝗽 𝟰: 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗲 𝗚𝗼𝗼𝗴𝗹𝗲 𝗠𝗮𝗽𝘀 𝗔𝗣𝗜

**Android**

Edit `android/app/src/main/AndroidManifest.xml`:

```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_GOOGLE_MAPS_API_KEY"/>
```

**iOS**

Edit `ios/Runner/AppDelegate.swift`:

```swift
GMSServices.provideAPIKey("YOUR_GOOGLE_MAPS_API_KEY")
```

<br/>

### 𝗦𝘁𝗲𝗽 𝟱: 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗱 𝗔𝗣𝗜 𝗞𝗲𝘆𝘀

You'll need accounts and API keys for:

• **MongoDB Atlas** — Database hosting ([Sign up](https://www.mongodb.com/cloud/atlas/register))  
• **Google Maps API** — Maps and geolocation ([Get API key](https://console.cloud.google.com/))  
• **Razorpay** — Payment processing ([Sign up](https://dashboard.razorpay.com/signup))  
• **ImgBB** — Image hosting ([Get API key](https://api.imgbb.com/))  
• **Twilio** (Optional) — SMS notifications ([Sign up](https://www.twilio.com/try-twilio))

<br/>
<br/>

## 𝗥𝘂𝗻𝗻𝗶𝗻𝗴 𝘁𝗵𝗲 𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻

<br/>

### 𝗦𝘁𝗮𝗿𝘁 𝗕𝗮𝗰𝗸𝗲𝗻𝗱 𝗦𝗲𝗿𝘃𝗲𝗿

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will be available at `http://localhost:5000`

<br/>

### 𝗦𝘁𝗮𝗿𝘁 𝗙𝗹𝘂𝘁𝘁𝗲𝗿 𝗔𝗽𝗽

```bash
cd frontend/RideMatch

# Run on Android
flutter run -d android

# Run on iOS
flutter run -d ios

# Run on Web
flutter run -d chrome
```

<br/>
<br/>

## 𝗔𝗣𝗜 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻

<br/>

### 𝗔𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/logout` | Logout user | Yes |

<br/>

### 𝗥𝗶𝗱𝗲 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/rides/create` | Create new ride | Yes |
| GET | `/api/rides/search` | Search available rides | Yes |
| GET | `/api/rides/:id` | Get ride details | Yes |
| PUT | `/api/rides/:id` | Update ride | Yes |
| DELETE | `/api/rides/:id` | Cancel ride | Yes |
| POST | `/api/rides/:id/like` | Save ride | Yes |

<br/>

### 𝗕𝗼𝗼𝗸𝗶𝗻𝗴 𝗦𝘆𝘀𝘁𝗲𝗺

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/bookings/create` | Book a ride | Yes |
| GET | `/api/bookings/user/:userId` | Get user bookings | Yes |
| PUT | `/api/bookings/:id/status` | Update booking status | Yes |
| DELETE | `/api/bookings/:id` | Cancel booking | Yes |

<br/>

### 𝗖𝗵𝗮𝘁 & 𝗠𝗲𝘀𝘀𝗮𝗴𝗶𝗻𝗴

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/chat/:userId` | Get user conversations | Yes |
| GET | `/api/chathistory/:chatId` | Get message history | Yes |
| POST | `/api/messages/send` | Send message | Yes |
| DELETE | `/api/messages/:id` | Delete message | Yes |

<br/>

### 𝗨𝘀𝗲𝗿 𝗣𝗿𝗼𝗳𝗶𝗹𝗲

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/profile/:userId` | Get user profile | Yes |
| PUT | `/api/profile/update` | Update profile | Yes |
| POST | `/api/profile/upload-image` | Upload profile picture | Yes |
| DELETE | `/api/profile/delete-account` | Delete account | Yes |

<br/>

### 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/notifications/:userId` | Get notifications | Yes |
| PUT | `/api/notifications/:id/read` | Mark as read | Yes |
| DELETE | `/api/notifications/:id` | Delete notification | Yes |

<br/>

### 𝗥𝗮𝘁𝗶𝗻𝗴𝘀 & 𝗥𝗲𝘃𝗶𝗲𝘄𝘀

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/reviews/create` | Submit review | Yes |
| GET | `/api/reviews/:userId` | Get user reviews | Yes |
| PUT | `/api/reviews/:id` | Update review | Yes |

<br/>
<br/>

## 𝗕𝘂𝗶𝗹𝗱 𝗳𝗼𝗿 𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻

<br/>

### 𝗔𝗻𝗱𝗿𝗼𝗶𝗱

```bash
# APK build
flutter build apk --release

# App Bundle (recommended for Play Store)
flutter build appbundle --release
```

<br/>

### 𝗶𝗢𝗦

```bash
flutter build ios --release
```

<br/>
<br/>

## 𝗧𝗲𝘀𝘁𝗶𝗻𝗴

<br/>

```bash
# Backend tests
npm test

# Flutter unit tests
cd frontend/RideMatch
flutter test

# Integration tests
flutter test integration_test/
```

<br/>
<br/>

## 𝗖𝗼𝗻𝘁𝗿𝗶𝗯𝘂𝘁𝗶𝗻𝗴

<br/>

Contributions are welcome! Here's how you can help:

<br/>

### 𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝗦𝘁𝗮𝗿𝘁𝗲𝗱

**1. Fork the repository**

**2. Clone your fork**
```bash
git clone https://github.com/YOUR_USERNAME/Ride_match.git
```

**3. Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

**4. Make your changes**

**5. Commit with a descriptive message**
```bash
git commit -m "Add amazing feature"
```

**6. Push to your fork**
```bash
git push origin feature/amazing-feature
```

**7. Open a Pull Request**

<br/>

### 𝗖𝗼𝗺𝗺𝗶𝘁 𝗖𝗼𝗻𝘃𝗲𝗻𝘁𝗶𝗼𝗻

• `feat:` New feature  
• `fix:` Bug fix  
• `docs:` Documentation changes  
• `style:` Code style/formatting  
• `refactor:` Code refactoring  
• `test:` Test updates  
• `chore:` Maintenance tasks

<br/>

### 𝗥𝗲𝗽𝗼𝗿𝘁𝗶𝗻𝗴 𝗜𝘀𝘀𝘂𝗲𝘀

Found a bug or have a suggestion? [Open an issue](https://github.com/Va09joshi/Ride_match/issues) with:

• Clear description of the problem  
• Steps to reproduce (for bugs)  
• Expected vs actual behavior  
• Screenshots if applicable  
• Environment details (OS, Flutter version, etc.)

<br/>
<br/>

## 𝗥𝗼𝗮𝗱𝗺𝗮𝗽

<br/>

### 𝗨𝗽𝗰𝗼𝗺𝗶𝗻𝗴 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀

• AI-powered ride matching algorithm  
• Multi-language support  
• Loyalty rewards program  
• Advanced analytics dashboard  
• Traffic-aware routing  
• Enhanced security features  
• Smartwatch companion app  
• Gamification elements  
• International expansion  
• Accessibility improvements

<br/>
<br/>

## 𝗟𝗶𝗰𝗲𝗻𝘀𝗲

<br/>

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.

<br/>
<br/>

## 𝗔𝘂𝘁𝗵𝗼𝗿

<br/>

<div align="center">

**Vaibhav Joshi**

[![GitHub](https://img.shields.io/badge/GitHub-Va09joshi-181717?style=flat-square&logo=github)](https://github.com/Va09joshi)
[![Repository](https://img.shields.io/badge/Repository-Ride__match-02569B?style=flat-square&logo=github)](https://github.com/Va09joshi/Ride_match)

</div>

<br/>
<br/>

## 𝗔𝗰𝗸𝗻𝗼𝘄𝗹𝗲𝗱𝗴𝗺𝗲𝗻𝘁𝘀

<br/>

Built with these amazing technologies:

• **Flutter** — UI framework  
• **Socket.IO** — Real-time engine  
• **MongoDB** — Database  
• **Google Maps** — Mapping services  
• **Razorpay** — Payment gateway  
• **Node.js** — Backend runtime

<br/>
<br/>

<div align="center">

---

<br/>

**Made with Flutter & Node.js**

*Empowering sustainable transportation, one ride at a time*

<br/>

![GitHub repo size](https://img.shields.io/github/repo-size/Va09joshi/Ride_match?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Va09joshi/Ride_match?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/Va09joshi/Ride_match?style=flat-square)

<br/>

© 2026 RideMatch. All rights reserved.

</div>
