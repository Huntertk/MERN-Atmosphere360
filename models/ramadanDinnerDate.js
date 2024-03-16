import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const RamadanDinnerBlockDates = mongoose.model('RamadanDinnerBlockDates', datesSchema)
export default RamadanDinnerBlockDates