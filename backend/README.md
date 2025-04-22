---

# 🔐 Auth Backend — Node.js + TypeScript + Prisma + MongoDB

This is a simple backend API for authentication built with:

- 🟦 Node.js + TypeScript
- 📦 Express
- 🔄 Prisma ORM
- 🍃 MongoDB
- 🔐 JWT-based authentication

---

## 🚀 Setup Instructions

### 1. Clone the Repo & Install Dependencies

```bash
git clone https://github.com/ayan-plush/IntelliSQR
cd backend
npm install
```

---

### 2. Configure Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname"
JWT_SECRET="your-super-secret-key"
PORT=5000
```

---

### 3. Set Up Prisma

```bash
npx prisma init        # creates schema.prisma and .env
npx prisma generate    # generates client
```

---

### 4. Run the Dev Server

```bash
npm run dev
```

> This starts the backend on `http://localhost:5000`.

---

## 🛠 Project Structure

```bash
src/
├── index.ts           # Entry point
├── global.d.ts        # Interface for process env
├── routes/            # Auth route handlers
├── controllers/       # Logic for login/register
├── prisma/            # Prisma client
└── utils/             # JWT helpers, etc.
```

---

## 📦 API Endpoints

### `POST /api/auth/register`

- Registers a new user
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "strongpassword"
  }
  ```

### `POST /api/auth/login`

- Logs in and returns a JWT
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "strongpassword"
  }
  ```

- **Response:**
  ```json
  {
    "token": "jwt-token-string"
  }
  ```

---

## 🔒 Auth Middleware

Protect routes using a simple JWT middleware. Example:

```ts
router.get('/protected', authMiddleware, (req, res) => {
  res.send("You’re authenticated!")
})
```

## 🧼 Linting & Formatting

```bash
npm run lint    # ESLint
npm run format  # Prettier
```

---

## ✨ Author

Made with ❤️ by [Ayan Jyotir Khajuria]

---