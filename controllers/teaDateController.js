import TeaBlockDates from "../models/teaDate.js"

export const addBlockDates  = async(req, res, next) => {
    try {
        const blockDates = await TeaBlockDates.create(req.body)
        res.status(201).json({msg:"Success", blockDates})
    } catch (error) {
        next(error)
    }
} 

export const getAllBlockDates = async (req, res, next) => {
    try {
        const blockDates = await TeaBlockDates.find()
        res.status(200).json({blockDates})
    } catch (error) {
        next(error)
    }
}

export const deleteBlockedDate = async(req, res, next) => {
    try {
        const dates = await TeaBlockDates.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"Removed Blocked Successfully"})
    } catch (error) {
        next(error)   
    }
}