import React, { useState } from 'react'
import image from '../assets/images/IMGNINE.jpg'
import axios from 'axios'
import { BiEditAlt } from 'react-icons/bi'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bookingFailed,  bookingStart, bookingSucess } from '../features/booking/bookingSlice'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../styles/booking.scss'

const Booking = () => {
    const navigate = useNavigate()
    const {
        bookingDate,
        adultCount,
        adultTotal,
        childCount,
        childTotal,
        infantCount,
        infantTotal,
        seniorCount,
        seniorTotal,
        totalAmount,
        loading,
        type,
        title
    } = useSelector(store => store.booking)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(bookingStart())
            const res = await axios.post('/api/v1/booking', {
                name,
                email,
                mobileNumber,
                bookingDate,
                adultCount,
                childCount,
                infantCount,
                seniorCount,
                totalAmount,
                bookingType: type,
                title
            })
            const response = res.data;
            const {data} = await axios.get('/api/v1/booking/totalbooking')
            dispatch(bookingSucess({name, email, mobileNumber, bookingResponse: response.url, totalBookingsCount: data.totalCount}))

            window.location.href = response.url;
        } catch (error) {
            dispatch(bookingFailed())
            console.log(error);
        }

    }


    if (totalAmount === 0) {
        return <Navigate to="/" />
    }
    return (
        <section className='bookingMainContainer'>
            <div className="bookingWrapper">
                <img className='banner' src={"https://res.cloudinary.com/drrkaak40/image/upload/v1709312899/Malaysia%20Experience/Aras%20Resturant/8_olysme.jpg"} alt="Aras Resturant" />
                <h1>Confirm and Pay</h1>
                <div className="detailsWrapper">
                    <p className='bookingType'>{title}</p>
                    <div className="topContainer">
                        <p>{bookingDate}</p>
                        <Link to="/date-confirm"><BiEditAlt /></Link>
                    </div>

                    <div className="guestQuantity">
                        {
                            adultCount === 0 ? "" :
                                <div className="guest">
                                    <p> Adult <span> X {adultCount}</span>
                                    </p>
                                    <span>MYR {adultTotal}</span>
                                </div>
                        }
                        {
                            childCount === 0 ? "" : <div className="guest">
                                <p> Child <span> X {childCount}</span></p>
                                <span>MYR {childTotal}</span>
                            </div>
                        }

                        {
                            infantCount === 0 ? "" : <div className="guest">
                                <p> Infant <span> X {infantCount}</span></p>
                                <span>MYR {infantTotal}</span>
                            </div>
                        }

                        {
                            seniorCount === 0 ? "" : <div className="guest">
                                <p> Senior <span> X {seniorCount}</span></p>
                                <span>MYR {seniorTotal}</span>
                            </div>
                        }


                        <div className="guest">
                            <p className='totalPayable'>Total Payable</p>
                            <span className='totalPayable'>MYR {seniorTotal + infantTotal + childTotal + adultTotal}</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id='name'
                            autoComplete="off"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        {/* <label htmlFor="phone">Mobile Number</label>
                    <input 
                    type="text" 
                    id="phone" 
                    placeholder='+60XXXXXXXX'  
                    autoComplete="off" 
                    required
                    onChange={handlePhNumberChange}
                    value={mobileNumber}
                    maxLength={"10"}
                    /> */}

                        <label htmlFor="phone">Phone</label>
                        <PhoneInput
                        id="phone"
                            defaultCountry="MY"
                            placeholder="Enter phone number"
                            value={mobileNumber}
                            onChange={setMobileNumber}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label htmlFor="email">Confirm Email</label>
                        <input
                            type="email"
                            id='cemail'
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button type='submit' disabled={loading}>{loading ? "Loading...." : "Pay Now"}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Booking