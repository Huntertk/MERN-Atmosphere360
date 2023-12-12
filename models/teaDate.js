import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const TeaBlockDates = mongoose.model('TeaBlockDates', datesSchema)
export default TeaBlockDates