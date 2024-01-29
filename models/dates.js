import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const BlockeDates = mongoose.model('BlockDate', datesSchema)
export default BlockeDates