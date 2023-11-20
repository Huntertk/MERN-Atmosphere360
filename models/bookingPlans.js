import mongoose from 'mongoose'

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
    type:{
        type: String
    },
    image:{
        type:[String]
    }
}, {timestamps: true})

const BookingPlan = mongoose.model('bookingPlan', bookingPlanSchema)
export default BookingPlan