# 🚀 Backend CRUD Service

A REST API built with Node.js, Express, and TypeScript for practicing backend development.  
It handles basic CRUD operations using a JSON file as a simple persistence layer.

---

## ✨ Features

- 📦 Get all products
- 🔍 Get product by ID
- ➕ Create new product
- 🛡️ Type-safe backend with TypeScript
- 📄 File-based storage (JSON)

---

## 🛠️ Tech Stack

- 🟢 Node.js
- ⚡ Express
- 🔷 TypeScript
- 📁 fs/promises (file handling)
- 🔑 crypto (UUID generation)

---

## 📁 Project Structure

```txt
src/
├── controllers/
├── repositories/
├── routes/
├── types/
└── data/
    └── products.json
```

---

## 📦 Installation

```bash
git clone https://github.com/andriirohal/backend_crud_service.git
cd backend_crud_service
npm install
npm run dev
```

---

## 📡 API Endpoints

- GET /products → Get all products  
- GET /products/:id → Get product by ID  
- POST /products → Create new product  

---

## 📝 Request Body (POST)

```json
{
  "name": "IPhone 17 Pro",
  "price": 30000,
  "stock": 50
}
```

---

## 📌 Notes

- 📄 Data is stored in `src/data/products.json`
- 🎯 This is a learning project for backend development
- 🗄️ No database is used yet

---

## 📚 What I Learned

- ⚡ REST API development with Express
- 🔷 TypeScript in backend
- 🏗️ Clean backend structure
- 📁 Working with file-based storage
