# Backend for UrM

Welcome to the backend repository for **UrMentor**. This project is built using **Node.js, Express, TypeScript, and MongoDB**. Follow the guide below to set up the project and contribute.

## 🚀 Tech Stack
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for Node.js
- **TypeScript** - Typed JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Multer** - File handling middleware
- **JSON Web Tokens (JWT)** - Authentication

---
## 📌 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/anurag-p6/urMentor-Backend.git
cd urMentor-Backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
```sh
touch .env
```
Add the following environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the Project
#### Development Mode
```sh
npm run dev
```
#### Production Mode
```sh
npm run build && npm start
```

---
## 📂 Project Structure
```
backend/
│── src/
│   ├── controllers/       # Business logic
│   ├── middlewares/       # Auth, validation, etc.
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions
│   ├── server.ts          # Main entry point
│── uploads/               # Multer uploads
│── .env                   # Environment variables
│── package.json           # Project dependencies
│── tsconfig.json          # TypeScript config
│── README.md              # Documentation
```

---
## 📜 API Endpoints
### ✅ Authentication
- `POST /api/signup` - Register a user
- `POST /api/verify` - Verify a user
- `POST /api/signin` - Login a user

### 📚 Courses
- `POST /api/courses/create` - Create a course (Instructor only)
- `GET /api/courses` - Get all courses

---
## 🔥 Contributing
### 1️⃣ Fork the Repository
Click on the **Fork** button at the top right of this page.

### 2️⃣ Clone Your Fork
```sh
git clone https://github.com/your-username/your_project_backend.git
cd your_project_backend
```

### 3️⃣ Create a New Branch
```sh
git checkout -b feature/your-feature-name
```

### 4️⃣ Make Your Changes
Edit the necessary files and commit your changes:
```sh
git add .
git commit -m "Added feature XYZ"
```

### 5️⃣ Push to Your Fork
```sh
git push origin feature/your-feature-name
```

### 6️⃣ Open a Pull Request
Go to the original repository and create a **Pull Request (PR)**.

---
## 🛠️ Issues & Discussions
- If you find a bug, [open an issue](https://github.com/anurag-p6/urMentor-Backend/issues).
- For discussions and feature requests, use the **Discussions** tab.

---
## 📜 License
This project is licensed under the **MIT License**.

---
## 🙌 Contributors
Thanks to everyone who contributes to this project! 🎉

