import express from 'express';
import { bookCar } from '../controllers/bookingControllers.js';
const router = express.Router()

router.post('/bookcar', bookCar);

export default router;