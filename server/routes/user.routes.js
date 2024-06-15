import express from 'express';
const router = express.Router();
import {getUsersController, getUsersByIdController, deleteUserController} from '../controllers/user.controllers.js'
import requireSignIn from '../middlewares/requireSignIn.js'

router.get('/getusers',getUsersController)

router.get('/getuser',requireSignIn,getUsersByIdController)

router.delete('/deleteuser/:userId',deleteUserController)

export default router;