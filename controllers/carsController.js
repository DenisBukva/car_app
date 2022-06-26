import asyncHandler from 'express-async-handler';
import Cars from '../models/carsModel.js';

const getAllCars = asyncHandler(async (req, res) => {
    const pageSize = 8
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Cars.countDocuments({ ...keyword })
    const cars = await Cars.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ cars, page, pages: Math.ceil(count / pageSize) })
  })

const getCarById = asyncHandler(async (req, res) => {
    const car = await Cars.findById(req.params.id)

    if (car) {
      res.json(car)
    } else {
      res.status(404)
      throw new Error('Car not found')
    }
})

const addCar = asyncHandler(async (req, res) => {
    const newCar = new Cars(req.body)

    const createdCar = await newCar.save()
    res.status(201).json(createdCar)
})

const editCar = async(req, res) => {
  const {
    markaVozila,
    slikaVozila,
    brojSasije,
    brojMotora,
    kw,
    ks,
    vrstaGoriva,
    godinaProizvodnje
  } = req.body

  const car = await Cars.findById(req.params.id)

  if (car) {
    car.markaVozila = markaVozila
    car.slikaVozila = slikaVozila
    car.brojSasije = brojSasije
    car.brojMotora = brojMotora
    car.kw = kw,
    car.ks = ks,
    car.vrstaGoriva = vrstaGoriva
    car.godinaProizvodnje = godinaProizvodnje
    
     const updatedCar = await car.save()
     res.json(updatedCar)
  } else {
    res.status(404)
    throw new Error('Car not found')
  }
}

const deleteCar = asyncHandler(async(req, res) => {
    const car = await Cars.findById(req.params.id)

    if (car) {
       await car.remove()
       res.json({ message: 'Car removed'})
    } else {
        res.status(404)
        throw new Error('Car not found')

    }
})

export {
    getAllCars, addCar, editCar, deleteCar, getCarById
}