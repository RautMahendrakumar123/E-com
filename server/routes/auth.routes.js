import express from 'express';
const router = express.Router();
import multerMiddleware from '../middlewares/multer.js';
import {registerController, adminRegisterController, loginController, privateRoute, AdminPrivateRoute} from '../controllers/auth.controllers.js';
import isAdmin from '../middlewares/isAdmin.js';
import requireSignIn from '../middlewares/requireSignIn.js';

router.post('/register',multerMiddleware,registerController)

router.post('/adminregister',multerMiddleware,adminRegisterController)

router.post('/login',loginController)

router.get('/user-auth',requireSignIn,privateRoute)

router.get('/admin-auth',requireSignIn,isAdmin,AdminPrivateRoute)



export default router;