// Database configuration

export { pool } from "../config";

// Router

export { router } from "../routes";

// Types

export { Product, ProductInput, Result } from "../types";

// Controllers

export { getAllProductsController, createProductController, getProductByIdController, deleteProductController, updateProductController } from "../controllers";

// Middlewares

export { validateId, errorHandler } from "../middlewares";

// Services

export { updateProduct, deleteProduct, getAllProducts, getProductById, createProduct } from "../services";