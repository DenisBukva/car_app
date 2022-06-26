import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
    markaVozila: {type: String, required: true},
    slikaVozila: {type: String, required: true},
    brojSasije: {type: String, required: true},
    brojMotora: {type: String, required: true},
    kw: {type: Number, required: true},
    ks: {type: Number, required: true},
    vrstaGoriva: {type: String, required: true},
    godinaProizvodnje: {type: Number, required: true},

}, {timestamps: true}
)

const Cars = mongoose.model('Cars', carSchema);

export default Cars