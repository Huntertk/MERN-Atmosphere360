import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../error/customError.js"
import Booking from "../models/booking.js"
import nodemailer from 'nodemailer'
import stripePackage from 'stripe';
import dotenv from 'dotenv'
dotenv.config()

const stripe = stripePackage(`${process.env.STRIPE_SK}`);

export const createBooking = async (req, res) => {
    const {
        name,
        email,
        mobileNumber,
        bookingDate,
        adultCount,
        childCount,
        infantCount,
        seniorCount,
        totalAmount,
    } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'myr',
                        product_data: {
                            name: 'Booking',
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://atmosphere-360.onrender.com/success',
            cancel_url: 'https://atmosphere-360.onrender.com/',
            payment_intent_data: {
                setup_future_usage: 'off_session',
                description: 'Booking payment',
                shipping: {
                    name,
                    phone: mobileNumber,
                    address: {
                        line1: '...',
                        postal_code: '...',
                        city: '...',
                        country: '...',
                    },
                },
                receipt_email: email,  // Include user's email as receipt_email
                metadata: {
                    bookingDate,
                    adultCount,
                    childCount,
                    infantCount,
                    seniorCount,
                    totalAmount,
                },
            },
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

    try {
        const booking = await Booking.create(req.body)
        if (!booking) {
            throw BadRequestError("Something Went Wrong")
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.MAIL_PASS
            }
        })

        const mailOptions = {
            from: 'factsofuniverse8@gmail.com',
            to: `${req.body.email},
        ${process.env.EMAIL}`,
            subject: `Booking Successfully`,
            text: `Hello, \n Hello ${req.body.name} and I am MD TAUFIK from Ticket Malaysia and your booking on ${req.body.bookingDate} is confirmed \n and your total payable amount is MYR ${req.body.totalAmount}. \n if any issue feel free to connect with us @${process.env.EMAIL}`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {

                console.log(info.response, " Email sent");
            }
        })
        // res.status(StatusCodes.CREATED).json({ message: "Your Order is Booked Successfully" })
    } catch (error) {
        // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something Wrong" })
    }
}


export const getAllBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find().sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ allBookings: booking })
    } catch (error) {
        next(error)
    }
}

export const getConfirmedBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'confirmed' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ confirmedBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const getPendingBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'pending' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ pendingBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const getCompletedBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'completed' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ completedBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const getCancelledBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'cancelled' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ cancelledBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const updateBooking = async (req, res, next) => {
    const { bookingStatus } = req.body
    const { id } = req.params
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, { bookingStatus })
        res.status(200).json({ message: "Booking Updated Successfully" })
    } catch (error) {
        next(error)
    }
}