import express from 'express';
import {loginUser, registerUser, updateUserProfile} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js'

const router = express()

router.post('/login',loginUser )
router.post('/register', registerUser)
router.put('/profile',protect, updateUserProfile)


export default router