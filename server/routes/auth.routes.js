import express from 'express';
const router = express.Router();
import multerMiddleware from '../middlewares/multer.js';
import {registerController, adminRegisterController, loginController, privateRoute} from '../controllers/auth.controllers.js';
import isAdmin from '../middlewares/isAdmin.js';

router.post('/register',multerMiddleware,registerController)

router.post('/adminregister',multerMiddleware,adminRegisterController)

router.post('/login',loginController)

router.get('/user-auth',isAdmin,privateRoute)


export default router;