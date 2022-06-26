import express from 'express';
import {
    getAllCars,
    getCarById, 
    addCar, 
    editCar, 
    deleteCar} from '../controllers/carsController.js';

const router = express.Router()

router.get('/', getAllCars)
router.post('/addcar', addCar)
router.put('/:id', editCar)
router.delete('/:id', deleteCar)
router.get('/:id', getCarById)

export default router
