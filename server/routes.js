import express from 'express';
import { listProducts, getProduct, createProduct, updateProduct, deleteProduct } from './productController.js';

const router = express.Router();

router.get('/products', listProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
