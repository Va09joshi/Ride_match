<h1 align="center">🚗 RideMatch – Peer-to-Peer Ride Sharing App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Flutter-3.22-blue.svg" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green.svg" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen.svg" />
  <img src="https://img.shields.io/badge/Google%20Maps%20API-Enabled-red.svg" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

<p align="center">
  A modern peer-to-peer ride sharing app that allows users to <strong>create rides</strong> 
  and <strong>join rides</strong>, featuring live tracking, in-app chat, secure auth, and
  real-time ride updates via WebSockets.  
  <br>
  Built with <strong>Flutter</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Google APIs</strong>.
</p>

<h2>✨ Features</h2>

<ul>
  <li>🚘 <strong>Create Rides</strong> – Set pickup, destination, time, seats, and pricing.</li>
  <li>🧍‍♂️ <strong>Join Rides</strong> – Search and join rides based on timing, price, and route match.</li>
  <li>📍 <strong>Live Tracking</strong> – Real-time location updates during the ride.</li>
  <li>💬 <strong>In-App Chat</strong> – Driver and passengers can communicate instantly.</li>
  <li>🔔 <strong>Push Notifications</strong> – Ride updates, chat messages, and reminders.</li>
  <li>🗺 <strong>Google Direction Routing</strong> – Path preview, ETA calculations.</li>
  <li>👤 <strong>User Profiles</strong> – Rating, history, verification.</li>
  <li>🔒 <strong>JWT Auth</strong> – Secure login and signup using tokens.</li>
</ul>

<hr>

<h2>🧰 Tech Stack</h2>

<h3>📱 Frontend</h3>
<ul>
  <li>Flutter (Dart)</li>
  <li>Provider / GetX / Bloc (as state management)</li>
  <li>Google Maps Flutter SDK</li>
</ul>

<h3>🖥 Backend</h3>
<ul>
  <li>Node.js + Express</li>
  <li>Socket.IO for real-time communication</li>
  <li>JWT Authentication</li>
</ul>

<h3>💽 Database</h3>
<ul>
  <li>MongoDB (GeoSpatial Indexing)</li>
</ul>

<h3>🗺 Google APIs</h3>
<ul>
  <li>Maps SDK</li>
  <li>Places Autocomplete</li>
  <li>Directions API</li>
</ul>

<h3>📩 Notifications</h3>
<ul>
  <li>Firebase Cloud Messaging (FCM) and Model Using NodeJs</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
ridematch/
 ├── Frontend/                 # Flutter mobile app
 │   ├── lib/
 │   ├── assets/
 │   └── pubspec.yaml
 │
 ├── backend/                 # Node.js backend
 │   ├── RideMatch_final/
 │   │   ├── controllers/
 │   │   ├── models/
 │   │   ├── routes/
 │   │   └── sockets/
 │   └── package.json
 │
 ├── db/                     # Database seeds / utilities
 ├── docs/
 └── README.md
</pre>

<hr>

<h2>🚀 Getting Started</h2>

<h3>🔧 Clone Repository</h3>

<pre>
git clone https://github.com/yourusername/ridematch.git
</pre>

<h3>🖥 Backend Setup</h3>

<pre>
cd backend
npm install
cp .env.example .env     # Add your credentials
npm run dev
</pre>

<h4>🔑 Required .env</h4>

<pre>
PORT=8000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
GOOGLE_MAPS_API_KEY=your_key
FCM_SERVER_KEY=your_fcm_key
</pre>

<h3>📱 Flutter Setup</h3>

<pre>
cd frontend
flutter pub get
flutter run
</pre>

<hr>

<h2>🔌 API Endpoints</h2>

<h4>🧍 Authentication</h4>
<pre>
POST /api/auth/register
POST /api/auth/login
</pre>

<h4>🚘 Rides</h4>
<pre>
POST /api/rides                # Create new ride
GET  /api/rides?from=&to=      # Search rides
POST /api/rides/:id/join       # Join a ride
</pre>

<h4>📍 Real-Time (Socket.IO)</h4>
<ul>
  <li><code>ride:created</code></li>
  <li><code>ride:joined</code></li>
  <li><code>location:update</code></li>
  <li><code>chat:message</code></li>
</ul>

<hr>

<h2>🛣 Roadmap</h2>

<ul>
  <li>[ ] Payment Gateway (Razorpay / Stripe)</li>
  <li>[ ] In-ride Safety Alerts / SOS</li>
  <li>[ ] Advanced route matching</li>
  <li>[ ] Ride sharing option (split fare)</li>
  <li>[ ] Admin dashboard (web)</li>
  <li>[ ] Voice call inside app</li>
</ul>

<hr>

<h2>🤝 Contributing</h2>

<p>
  Contributions are welcome!  
  Feel free to open issues, fork the repo, and submit pull requests.
</p>

<hr>

<h2>📄 License</h2>

<p>This project is licensed under the <strong>MIT License</strong>.</p>

<hr>

<h2>👨‍💻 Author</h2>

<p><strong>Developed By: Vaibhav Joshi</strong></p>

<p align="center">
  <strong>⭐ If you like this project, give it a star on GitHub!</strong>
</p>
