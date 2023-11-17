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

   
}

export const successBooking = async (req, res, next) => {
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
            from: process.env.EMAIL,
            to: `${req.body.email},
        ${process.env.EMAIL}`,
            subject: `Booking Successfully`,
            html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#ffffff"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p15t es-p15b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-m-txt-c" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://atmosphere-360.onrender.com/assets/logo-6324076a.png" alt="Logo" style="display: block;" height="85" title="Logo"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#fff1ec" style="background-color: #fff1ec;">
                                        <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img" src="http://localhost:5173/src/assets/images/IMGTWO.jpg" alt style="display: block;" width="600"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p20b es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text">
                                                                                        <h1 style="color: #f26823;">Booking Successfully</h1>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="270" class="esd-container-frame es-m-p20b" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-m-txt-l es-p10t">
                                                                                        <h2 style="color: #f26823;">Booking Date</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-spacer es-p10t es-p10b es-m-txt-l" style="font-size:0">
                                                                                        <table border="0" width="50%" height="100%" cellpadding="0" cellspacing="0" style="display: inline-table; width: 50% !important;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 5px solid #ff8e72; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10t">
                                                                                        <p><b>${req.body.bookingDate}</b></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="270" class="esd-container-frame" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-m-txt-l es-p10t">
                                                                                        <h2 style="color: #f26823;">Booking By</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-spacer es-p10t es-p10b es-m-txt-l" style="font-size:0">
                                                                                        <table border="0" width="50%" height="100%" cellpadding="0" cellspacing="0" style="display: inline-table; width: 50% !important;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 5px solid #ff8e72; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10t">
                                                                                        <p><strong>${req.body.name}</strong><br></p>
                                                                                        <p><strong>${req.body.email}</strong><br>+60986228441448</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p5t es-p40b es-p20r es-p20l esdev-adapt-off" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esdev-mso-td" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="270" class="es-m-p0r esd-container-frame" align="center">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="left" class="esd-block-text es-m-txt-l">
                                                                                                        <h2>Total Amount</h2>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td width="20"></td>
                                                                    <td class="esdev-mso-td" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="270" align="left" class="esd-container-frame">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="right" class="esd-block-text es-m-txt-r">
                                                                                                        <h2>MYR ${req.body.totalAmount}</h2>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="386982" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;" bgcolor="#ffffff">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-p10t es-p20b" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://atmosphere-360.onrender.com/assets/logo-6324076a.png" alt="Logo" style="display: block;" height="98" title="Logo"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
            `
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {

                console.log(info.response, " Email sent");
            }
        })
        res.status(StatusCodes.CREATED).json({ message: "Your Order is Booked Successfully", bookingDetails: booking })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
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