import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../error/customError.js"
import Booking from "../models/booking.js"

export const createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body)
        if(!booking){
            throw BadRequestError("Something Went Wrong")
        }
        res.status(StatusCodes.CREATED).json({message:"Your Order is Booked Successfully"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Something Wrong"})
    }
}


export const getAllBooking = async(req, res, next) => {
    try {
        const booking = await Booking.find().sort({createdAt:-1})
        res.status(StatusCodes.OK).json({allBookings: booking})
    } catch (error) {
        next(error)
    }
}

export const getConfirmedBooking = async(req, res, next) => {
    try {
        const booking = await Booking.find({bookingStatus:'confirmed'}).sort({createdAt:-1})
        res.status(StatusCodes.OK).json({confirmedBookings: booking})
    } catch (error) {
        next(error)
    }
}


export const getPendingBooking = async(req, res, next) => {
    try {
        const booking = await Booking.find({bookingStatus:'pending'}).sort({createdAt:-1})
        res.status(StatusCodes.OK).json({pendingBookings: booking})
    } catch (error) {
        next(error)
    }
}


export const getCompletedBooking = async(req, res, next) => {
    try {
        const booking = await Booking.find({bookingStatus:'completed'}).sort({createdAt:-1})
        res.status(StatusCodes.OK).json({completedBookings: booking})
    } catch (error) {
        next(error)
    }
}


export const getCancelledBooking = async(req, res, next) => {
    try {
        const booking = await Booking.find({bookingStatus:'cancelled'}).sort({createdAt:-1})
        res.status(StatusCodes.OK).json({cancelledBookings: booking})
    } catch (error) {
        next(error)
    }
}