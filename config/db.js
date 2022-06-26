import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`MongoDB is Connected`))
    .catch(err => console.log(`Error: ${err.message}`))
}

export default connectDB