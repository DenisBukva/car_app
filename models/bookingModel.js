import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    car: {type: mongoose.Schema.Types.ObjectId, ref:'Cars'},
    user: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    bookedTimeSlots:{
        from: {type : String, required: true},
        to: {type: String, required: true}
    },
    ruta: {
        from:{type: String, required: true},
        to:{type: String, required: true}

    },
    vozac: {type: String},
    brojPutnika: {type: Number, required: true},
    isReservd: {
        type: Boolean
    }


},
{timestamps: true}
)

const Bookings = mongoose.model('Bookings', bookingSchema);

export default Bookings;