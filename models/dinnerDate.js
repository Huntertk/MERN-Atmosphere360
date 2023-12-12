import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const DinnerBlockDates = mongoose.model('DinnerBlockDates', datesSchema)
export default DinnerBlockDates