import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const LunchBlockDates = mongoose.model('LunchBlockDates', datesSchema)
export default LunchBlockDates