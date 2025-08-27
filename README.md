# 📝 Node.js Blog

Welcome to the **Node.js Blog** project! 🚀

This is a simple blog application built with Node.js, Express, and EJS. It features a modular structure and is ready for customization and deployment.

## 📁 Project Structure

```
blog/
├── app.js
├── package.json
├── public/
│   ├── css/
│   ├── img/
│   └── js/
├── server/
│   └── routes/
│       └── main.js
└── views/
    └── index.ejs
```

## ✨ Features

- 🗂️ Modular Express routing
- 🎨 EJS templating with dynamic locals
- 📦 Static file serving
- 🌱 Easy to extend
- 📄 About page (`/about` route)
- 🧩 Modern dependencies: MongoDB, JWT, sessions, and more

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RasZarky/nodejs-blog.git
   cd nodejs-blog
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app:**
   ```bash
   npm start
   ```
4. **Visit:**
   Open your browser and go to [http://localhost:5000](http://localhost:5000)

## 🆕 New Features

- `/about` page with EJS rendering
- Dynamic locals for page titles and descriptions
- Author section and sample posts on homepage
- Ready for MongoDB integration (see dependencies)

## 🛠️ Scripts

- `npm start` — Start the server
- `npm run dev` — Start the server with nodemon (if configured)

## 📦 Main Dependencies

- express
- ejs
- express-ejs-layouts
- mongoose
- dotenv
- express-session
- connect-mongo
- jsonwebtoken
- bcrypt
- method-override
- cookie-parser

## 📄 License

MIT License © 2025

---

Made with ❤️ by RasZarky
