# 🛍️ Shopix – Full Stack E-Commerce App

A fully functional **E-Commerce Platform** built with **React**, **Node.js (Express)**, and **MongoDB** — featuring **Stripe payments**, an **Admin Dashboard**, and a **modern responsive UI**.

---

## 🚀 Live Deployments

| Service                     | URL                                                                      |
| --------------------------- | ------------------------------------------------------------------------ |
| 🛒 **Frontend (User App)**  | [https://shopix-frontend.vercel.app](https://shopix-frontend.vercel.app) |
| ⚙️ **Backend (API Server)** | [https://shopix-backend.vercel.app](https://shopix-backend.vercel.app)   |
| 🧑‍💼 **Admin Panel**          | [https://shopix-admin.vercel.app](https://shopix-admin.vercel.app)       |

---

## 🖥️ Tech Stack

### **Frontend**

- ⚛️ **React (Vite)**
- 🧭 **React Router DOM**
- 🎨 **CSS Frameworks:**
  - Tailwind CSS
  - Custom SCSS modules
- ⚡ **State Management:** Context API
- 💳 **Stripe & Razorpay Checkout Integration**
- 🔐 **JWT Authentication**

### **Backend**

- 🟢 **Node.js** with **Express**
- 🍃 **MongoDB** & **Mongoose**
- 🔑 **JWT Authentication & Authorization**
- 🧾 **Stripe and Razorpay Payment Gateway**
- 🌐 **RESTful API Architecture**
- 🧰 **Cloudinary** and **Multer** for image upload

### **Admin Panel**

- 🧩 React-based dashboard
- 📊 Manage Products & Orders
- 🔒 Secure Admin Access
- ✏️ Full CRUD Operations via API

---

## ⚙️ Features

- 🛒 Add, remove & edit products
- 👤 User authentication (register/login/logout)
- 💳 Secure Stripe payments
- 📦 Order tracking system
- 🧾 Admin dashboard for management
- 🌈 Modern, responsive and fast UI
- ⚡ Optimized performance with Vite build

---

## 🧠 Architecture Overview

```

shopix/
│
├── frontend/      → React (User App)
├── backend/       → Node.js + Express + MongoDB API
└── admin/         → React (Admin Dashboard)

```

Each part of the project is deployed separately on **Vercel**, communicating via RESTful APIs.

---

## 🛠️ Setup & Installation

Clone the repository and navigate into the folder:

```bash
git clone https://github.com/BeyzaSimsekk/E-Commerce_App.git
cd E-Commerce_App
```

### 1️⃣ Install Dependencies

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

**Backend:**

```bash
cd backend
npm install
npm run server
```

**Admin:**

```bash
cd admin
npm install
npm run dev
```

### 2️⃣ Environment Variables

Create `.env` files for each project with your own keys:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_URL=optional_if_used
```

---

## 💳 Payments

Integrated using **Stripe API**, **Razorpay API**
All transactions are securely handled via **Stripe Checkout** and **Razorpay**, ensuring safe and fast payments.

---

## 🎨 UI & Styling

The design blends **Tailwind CSS** and **custom SCSS** for a modern and flexible experience.
Color themes and spacing are chosen for clarity, accessibility, and elegance.

---

## 🏗️ Project Goals

This project was built to:

- Strengthen **full-stack development** skills
- Explore **real-world payment integration** (Stripe)
- Build a **modular, scalable architecture**

---

## 🪄 Credits

- Thanks to **GreatStack** for the initial inspiration and guidance 🚀
- Extended, customized, and developed by **[Beyza Şimşek](https://github.com/BeyzaSimsekk)** ✨
