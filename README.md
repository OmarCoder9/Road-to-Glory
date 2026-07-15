# 🚀 Road to Glory

A secure and scalable **Event Management REST API** built with **Node.js**, **Express.js**, and **MongoDB**.

Road to Glory is a backend platform developed to manage official football events during Egypt's historic FIFA World Cup campaign. The platform provides secure APIs for attendees, organizers, and administrators to manage events, bookings, attendance, feedback, and reporting.

---

# 📖 Project Overview

Road to Glory is a centralized backend solution for managing official football events. It allows attendees to register, reserve tickets, attend events, and submit feedback, while organizers manage events and administrators oversee the entire platform through secure RESTful APIs.

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
- Browse Available Events
- Reserve Tickets
- View Reservation History
- Access Digital Tickets
- Attend Events
- Submit Feedback

### 🏢 Organizer

- Create & Manage Events
- Validate Tickets
- Manage Attendees
- View Event Performance

### 👑 Administrator

- Manage Users
- Approve Organizers
- Monitor Platform Activity
- Override Events
- View Reports & Analytics

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

```text
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

Move to the project directory

```bash
cd Road-to-Glory
```

Install dependencies

```bash
npm install
```

Create your environment file

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

JWT_SECRET_KEY=your_secret_key
```

---

# 🌐 Base URL

```text
http://localhost:3000/api
```

---

# 📡 Sample API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/attendee/events` | Get available events |
| POST | `/api/attendee/events/:eventId/reserve` | Reserve a ticket |
| GET | `/api/attendee/tickets` | Get attendee tickets |
| GET | `/api/admin/analytics` | View platform analytics |
| PATCH | `/api/admin/organizers/approve` | Approve organizer |

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
- Secure REST API Design

---

# 🏗 Architecture

The project follows the **MVC (Model–View–Controller)** architecture.

```text
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

# 🚀 Future Improvements

- Email Verification
- Forgot Password
- Refresh Tokens
- Image Upload
- Payment Integration
- Swagger API Documentation
- Unit Testing
- Docker Support

---

# 👨‍💻 Development Team

- Omar
- Moataz
- Nada

