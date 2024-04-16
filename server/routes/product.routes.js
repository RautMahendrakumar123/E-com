import express from 'express'
const router = express.Router();
import { addProduct, getProducts, getProduct, updateProduct, deleteProduct, getProductByCategory, getSpecialProduct, getAllProducts } from '../controllers/product.controllers.js';
import multerMiddleware from '../middlewares/multer.js'



router.get('/products',getProducts);

router.get('/allProducts',getAllProducts)

router.get('/product/:id',getProduct);

router.get('/products/:category',getProductByCategory);

router.get('/products/special/true',getSpecialProduct);

router.post('/upload',multerMiddleware,addProduct);

router.put('/product/update/:id',multerMiddleware,updateProduct);

router.delete('/product/delete/:id',deleteProduct);

export default router;