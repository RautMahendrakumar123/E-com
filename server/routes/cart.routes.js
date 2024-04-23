import express from 'express'
import { AddToCartController, GetCartProductController, decreaseProductQuantityController, increaseProductQuantityController, removeProductFromCart } from '../controllers/cart.controllers.js';
import requireSignIn from '../middlewares/requireSignIn.js';
const router = express.Router()

router.post('/add-to-cart',requireSignIn,AddToCartController)

router.get('/get-cart-product',requireSignIn,GetCartProductController)

router.delete('/remove-cart/:productId',requireSignIn,removeProductFromCart)

router.put('/increase-quantity/:productId',requireSignIn,increaseProductQuantityController)

router.put('/decrease-quantity/:productId',requireSignIn,decreaseProductQuantityController)


export default router;