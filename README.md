# Express CRUD Service

A REST API built with Node.js, Express, and TypeScript.  
The project demonstrates a simple layered architecture using file-based storage.

---

## ✨ Features 

- Get all products 
- Get product by ID 
- Create new product 
- Delete product by ID 
- Type-safe with TypeScript 
- JSON file storage

## Tech Stack

- Node.js
- Express
- TypeScript
- fs/promises
- crypto (UUID)

---

## Project Structure

```txt
src/
├── controllers/    
├── middlewares/ 
├── repositories/  
├── routes/       
├── services/        
├── types/
└── data/
    └── products.json