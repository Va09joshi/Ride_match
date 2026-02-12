# RideMatch

> A modern full-stack ridesharing platform with real-time chat, live tracking, and smart ride matching

[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)](https://flutter.dev)  
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)  
[![License](https://img.shields.io/github/license/Va09joshi/Ride_match?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Configuration](#configuration)  
- [API Reference](#api-reference)  
- [Contributing](#contributing)  
- [License](#license)

---

## Overview

RideMatch is a comprehensive carpooling solution that connects drivers and passengers for efficient, affordable rides. Built with Flutter for cross-platform mobile support and Node.js for a robust backend infrastructure.

### Key Highlights

- 🔐 Secure JWT authentication  
- 🗺️ Real-time GPS tracking with Google Maps  
- 💬 Live chat using Socket.IO  
- 💳 Integrated Razorpay payments  
- ⭐ User ratings and reviews  
- 🔔 Push notifications

---

## Features

### Authentication & Security  
Secure user registration and login with JWT tokens, encrypted passwords, and protected API routes.

### Live Location Tracking  
Real-time GPS tracking integrated with Google Maps for accurate route planning and distance calculation.

### Real-time Messaging  
Instant messaging between drivers and passengers powered by Socket.IO with conversation history.

### Smart Ride Matching  
Intelligent algorithm to match riders with drivers based on location, time, and user preferences.

### Payment Integration  
Seamless payment processing through Razorpay with support for multiple payment methods and transaction history.

### User Profiles & Ratings  
Customizable profiles with image uploads and a comprehensive rating system for trust and safety.

---

## Tech Stack

### Frontend
- **Framework:** Flutter 3.9.2+  
- **Language:** Dart  
- **Key Libraries:**  
  - `google_maps_flutter` - Maps integration  
  - `socket_io_client` - Real-time communication  
  - `razorpay_flutter` - Payment processing  
  - `geolocator` - Location services  
  - `image_picker` - Image selection  
  - `cached_network_image` - Image optimization

### Backend
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Key Libraries:**  
  - `socket.io` - WebSocket server  
  - `jsonwebtoken` - Authentication  
  - `bcryptjs` - Password hashing  
  - `multer` - File uploads  
  - `cors` - CORS handling

---

## Getting Started

### Prerequisites

Before you begin, ensure you have:

- Node.js (v16 or higher)  
- Flutter (v3.9.2 or higher)  
- MongoDB (local installation or Atlas account)  
- Git

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Va09joshi/Ride_match.git
   cd Ride_match
   ```  

2. **Install backend dependencies**  
   ```bash
   npm install
   ```  

3. **Install frontend dependencies**  
   ```bash
   cd frontend/RideMatch
   flutter pub get
   ```  

4. **Set up environment variables**  
   
   Create a `.env` file in the root directory:  
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   IMGBB_API_KEY=your_imgbb_api_key
   ```

5. **Run the application**

   Start the backend:  
   ```bash
   npm run dev
   ```

   Start the Flutter app:  
   ```bash
   cd frontend/RideMatch
   flutter run
   ```

---

## Configuration

### API Keys Required

You'll need to register and obtain API keys from:

| Service | Purpose | Link |
|---------|---------|------|
| MongoDB Atlas | Database hosting | [Sign up](https://www.mongodb.com/cloud/atlas/register) |
| Google Maps API | Maps and geolocation | [Get key](https://console.cloud.google.com/) |
| Razorpay | Payment gateway | [Sign up](https://dashboard.razorpay.com/signup) |
| ImgBB | Image hosting | [Get key](https://api.imgbb.com/) |

### Google Maps Setup

**Android**

Add your API key to `android/app/src/main/AndroidManifest.xml`:
```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY_HERE"/>
```

**iOS**

Add your API key to `ios/Runner/AppDelegate.swift`:
```swift
GMSServices.provideAPIKey("YOUR_API_KEY_HERE")
```

---

## API Reference

### Authentication

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/auth/register` | POST | Register new user | No |
| `/api/auth/login` | POST | User login | No |
| `/api/auth/me` | GET | Get current user | Yes |
| `/api/auth/logout` | POST | Logout user | Yes |

### Rides

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/rides/create` | POST | Create new ride | Yes |
| `/api/rides/search` | GET | Search available rides | Yes |
| `/api/rides/:id` | GET | Get ride details | Yes |
| `/api/rides/:id` | PUT | Update ride | Yes |
| `/api/rides/:id` | DELETE | Cancel ride | Yes |

### Bookings

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/bookings/create` | POST | Book a ride | Yes |
| `/api/bookings/user/:userId` | GET | Get user bookings | Yes |
| `/api/bookings/:id/status` | PUT | Update booking status | Yes |
| `/api/bookings/:id` | DELETE | Cancel booking | Yes |

### Chat

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/chat/:userId` | GET | Get user conversations | Yes |
| `/api/chathistory/:chatId` | GET | Get message history | Yes |
| `/api/messages/send` | POST | Send message | Yes |
| `/api/messages/:id` | DELETE | Delete message | Yes |

### Profile

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/profile/:userId` | GET | Get user profile | Yes |
| `/api/profile/update` | PUT | Update profile | Yes |
| `/api/profile/upload-image` | POST | Upload profile picture | Yes |

---

## Project Structure

```
Ride_match/
├── frontend/RideMatch/
│   ├── lib/
│   │   ├── main.dart
│   │   ├── views/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── payment/
│   │   │   └── chat/
│   │   ├── models/
│   │   ├── services/
│   │   └── widgets/
│   └── pubspec.yaml
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
└── package.json
```

---

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request

### Commit Convention

- `feat:` New feature  
- `fix:` Bug fix  
- `docs:` Documentation changes  
- `style:` Code formatting  
- `refactor:` Code refactoring  
- `test:` Adding tests  
- `chore:` Maintenance

---

## Build for Production

### Android
```bash
flutter build apk --release
# or
flutter build appbundle --release
```

### iOS
```bash
flutter build ios --release
```

---

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.

---

## Author

**Vaibhav Joshi**

- GitHub: [@Va09joshi](https://github.com/Va09joshi)  
- Repository: [Ride_match](https://github.com/Va09joshi/Ride_match)

---

## Acknowledgments

Built with amazing technologies:
- Flutter
- Socket.IO
- MongoDB
- Google Maps API
- Razorpay
- Node.js

---

<div align="center">

**Made with ❤️ using Flutter & Node.js**

*Empowering sustainable transportation*

![GitHub repo size](https://img.shields.io/github/repo-size/Va09joshi/Ride_match?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Va09joshi/Ride_match?style=flat-square)

© 2026 RideMatch

</div>