import BookingPlan from "../models/bookingPlans.js"

export const addBookingPlan = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.create(req.body)
        res.status(201).json({bookingPlan:"Created"})
    } catch (error) {

        next(error)
    }
}


export const getAllBookingPlan = async (req, res, next) => {
    try {
        const bookingPlan = await BookingPlan.find()
        res.status(200).json({bookingPlan})
    } catch (error) {
        next(error)
    }
}