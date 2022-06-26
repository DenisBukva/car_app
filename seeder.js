import dotenv from 'dotenv'
import cars from './data/cars.js';
import Cars from './models/carsModel.js'
import connectDB from './config/db.js'

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Cars.deleteMany()
        const sampleCars = cars.map((car) => {
            return {...car}
        })
        await Cars.insertMany(sampleCars)
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
     
      await Cars.deleteMany()
      
  
      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
  }

  
if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }