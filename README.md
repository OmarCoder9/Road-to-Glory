# 🚀 Road To Glory

A powerful Event Management REST API built with **Node.js**, **Express.js**, and **MongoDB**.

The system provides a complete backend solution for managing events, attendees, organizers, reservations, tickets, authentication, and admin operations.

---

## 📌 Features

- 🔐 JWT Authentication
- 👤 User Roles (Admin, Organizer, Attendee)
- 🎉 Event Management
- 🎟 Ticket Management
- 📅 Reservation System
- 💬 Feedback System
- 🛡 Authorization Middleware
- 🔑 Password Hashing using bcrypt
- 📊 Admin Logging
- ⚡ Clean MVC Architecture
- 🌍 RESTful API Design

---

## 🛠 Tech Stack

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

## 📂 Project Structure

```
Road-to-Glory
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── .env.example
├── package.json
└── index.js
```

---

## ⚙ Installation

Clone the repository

```bash
git clone https://github.com/OmarCoder9/Road-to-Glory.git
```

Move to the project

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

Fill the required variables inside `.env`

Run the server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Example:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📌 Main Modules

- Authentication
- Admin
- Organizer
- Attendee
- Events
- Reservations
- Tickets
- Feedback

---

## 🔒 Security

- Password Hashing (bcrypt)
- JWT Authentication
- Role-Based Authorization
- Protected Routes
- Input Validation

---

## 👨‍💻 API Architecture

The project follows the MVC architecture.

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

## 🚀 Future Improvements

- Email Verification
- Forget Password
- Refresh Tokens
- Image Upload
- Payment Integration
- Swagger API Documentation
- Unit Testing

---

## 👥 Contributors

- Omar
- Moataz
- Nada

---

## 📄 License

This project is licensed under the ISC License.
