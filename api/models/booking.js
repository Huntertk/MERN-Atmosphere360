import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    adultCount:{
        type:Number,
    },
    childCount:{
        type: Number,
    },
    infantCount:{
        type: Number,
    },
    seniorCount:{
        type: Number,
    },
    totalAmount:{
        type:Number
    },
    bookingDate:{
        type: String
    },
    name:{
        type:String,
    },
    mobileNumber:{
        type: String
    },
    email:{
        type: String
    },
    bookingStatus:{
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending"
    }
},{timestamps: true})


const Booking = mongoose.model('booking', bookingSchema)
export default Booking