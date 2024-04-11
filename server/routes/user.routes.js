import express from 'express';
const router = express.Router();
import {getUsersController, getUsersByIdController, deleteUserController} from '../controllers/user.controllers.js'

router.get('/getusers',getUsersController)

router.get('/getuser/:id',getUsersByIdController)

router.delete('/deleteuser/:userId',deleteUserController)

export default router;