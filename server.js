import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


dotenv.config()

const app = express()

app.use(express.json())

//All routes
import auth from './routes/userRoutes.js';
app.use('/auth', auth)
import cars from './routes/carRoutes.js';
app.use('/api/cars', cars)

import bookings from './routes/bookingRoutes.js';
app.use('/api/bookings', bookings)

//Database 
connectDB()

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(
    `Server running in ${process.env.NODE_ENV} made on port ${PORT}`.yellow.bold
))