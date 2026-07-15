# 🚀 Road to Glory

A secure and scalable **Event Management REST API** built with **Node.js**, **Express.js**, and **MongoDB**.

Road to Glory is a backend platform developed to manage official football events during Egypt's historic FIFA World Cup campaign. The platform provides secure APIs for attendees, organizers, and administrators to manage events, bookings, attendance, feedback, and reporting.

---

# 📖 Project Overview

The project was developed to provide a centralized backend solution for managing official football events. It allows attendees to register and reserve tickets, organizers to create and manage events, and administrators to monitor the entire platform through secure REST APIs.

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Roles Management
- 🎉 Event Management
- 🎟 Ticket Reservation
- 📅 Attendance Management
- 💬 Feedback & Reviews
- 📊 Reports & Analytics
- 🛡 Role-Based Authorization
- 🔑 Password Hashing (bcrypt)
- ✅ Input Validation
- ⚡ RESTful API
- 🏗 MVC Architecture

---

# 👥 User Roles

### 👤 Attendee

- Register & Login
- Browse Events
- Reserve Tickets
- View Reservation History
- Access Digital Tickets
- Attend Events
- Submit Feedback

### 🏢 Organizer

- Create Events
- Update Events
- Delete Events
- Manage Attendees
- Validate Tickets
- View Event Statistics

### 👑 Administrator

- Manage Users
- Approve Organizers
- Monitor Platform
- Manage Events
- View Reports
- Track System Activity

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Validator
- Dotenv
- Cors
- Nodemon

---

# 📂 Project Structure

```
Road-to-Glory
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── package.json
├── .env.example
└── index.js
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/OmarCoder9/Road-to-Glory.git
```

Move into the project directory

```bash
cd Road-to-Glory
```

Install dependencies

```bash
npm install
```

Create the environment file

```bash
cp .env.example .env
```

Configure the required environment variables.

Start the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📌 Main Modules

- Authentication & User Management
- Organizer Approval
- Event Management
- Ticket Reservation
- Attendance Management
- Feedback System
- Reporting & Analytics

---

# 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization
- Request Validation
- Secure API Design

---

# 🏗 Architecture

The project follows the **MVC (Model–View–Controller)** architecture.

```
Client
   │
Routes
   │
Controllers
   │
Models
   │
MongoDB
```

---

# 📡 REST API

The API provides endpoints for:

- Authentication
- Users
- Organizers
- Events
- Reservations
- Tickets
- Attendance
- Feedback
- Reports

---

# 🚀 Future Improvements

- Email Verification
- Forgot Password
- Refresh Tokens
- Image Upload
- Payment Integration
- Swagger Documentation
- Unit Testing
- Docker Support

---

# 👨‍💻 Development Team

- Omar
- Moataz
- Nada

