# Frontend - Login/Register App

This is the frontend of a simple fullstack authentication app built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **React Hook Form**, **React Query**, and **Zod** for form validation.

## 🛠️ Tech Stack

- **React + TypeScript** – UI & typed logic
- **Vite** – Build tool for fast development
- **Tailwind CSS** – Utility-first styling
- **React Hook Form** – Efficient form handling
- **Zod** – Schema-based validation
- **React Query** – API state management

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── features/               # Login / Register pages
├── components/               # React Query hooks (e.g., useLogin)
├── api/                 # API client (axios), utils
├── assets/                 # API client (axios), utils
├── App.tsx              # App layout and routes
└── main.tsx             # Entry point
```

---

## 📦 Installation

```bash
git clone https://github.com/ayan-plush/IntelliSQR
cd frontend
npm install
```

---

## 🚀 Development

```bash
npm run dev
```

---

## ✨ Features

- ✅ Login pages
- ✅ Form validation with Zod
- ✅ Clean, responsive UI with Tailwind
- ✅ Submit buttons disabled while loading
- ✅ Error handling for invalid credentials

---

## 🧪 Validation Schema (Zod)

```ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
```

---

## 📡 API Integration

All network requests are handled with **React Query** and **Axios** (or Fetch). API endpoints are assumed to be served by the backend (e.g., `/api/login`, `/api/register`).
