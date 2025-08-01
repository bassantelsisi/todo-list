# Todo List API

A simple RESTful Todo List API built with Node.js, Express, and MongoDB.  
Includes user authentication using JWT and basic CRUD functionality for managing todo items.

---

## 📌 Features

- ✅ User registration & login
- 🔐 JWT-based authentication
- 📝 Create and fetch todo items
- 🔒 Protected routes
- ✅ Mongoose validation
- 🧪 Postman testing ready

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **JWT** for user authentication
- **dotenv** for environment configuration
- (Optional) **Nodemon** for development auto-reload

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bassantelsisi/todo-api.git
cd todo-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File

In the root of your project, create a file named `.env` with the following:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=
```

**Do not upload .env to GitHub. Make sure it's in .gitignore.**

## 🔄 Run the Server

```bash
npm run dev
```

Or without nodemon:

```bash
node index.js
```

---

## 📮 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login user (get token) |

### ✅ Todo Routes (require JWT token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Add a new todo |

**Add Authorization header:**
```
Authorization: Bearer <your_token>
```

---

## 🧪 Testing with Postman

1. Register a new user.
2. Login to get the JWT token.
3. Copy the token and use it to access `/api/todos`.

---

## 📝 Notes

- `title` is required when adding a todo.
- The project uses Mongoose validation to ensure data integrity.
- Admin features and more CRUD routes can be added later.

---

## 📁 Project Structure

```
todo-api/
├── controllers/
│   ├── authController.js
│   └── todoController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Todo.js
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```