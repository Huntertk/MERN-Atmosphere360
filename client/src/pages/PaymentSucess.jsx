import { useDispatch, useSelector } from 'react-redux'
import '../styles/PaymentSuccess.scss'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import paymentSuccesImg from '../assets/images/paymentSucces.png'
import { toast } from 'react-toastify';
import { bookingConfirm } from '../features/booking/bookingSlice';
import { FaCheckCircle } from "react-icons/fa";


const PaymentSucess = () => {
  const { 
    bookingDate,
    adultCount,
    childCount,
    infantCount,
    seniorCount,
    totalAmount,
    bookingResponse,
    name,
    email,
    mobileNumber,
    totalBookingsCount,
    type
  } = useSelector(store => store.booking)
  const dispatch = useDispatch()
  const url = bookingResponse?.split('/')
  const render = url[2] === 'checkout.stripe.com'
  const createBookingId = `ME000${totalBookingsCount + 1}`
    const confirmBooking = async () => {
      try {
        const {data} = await axios.post('/api/v1/booking/successbooking', {
          name,
          email,
          mobileNumber,
          bookingDate,
          adultCount,
          childCount,
          infantCount,
          seniorCount,
          totalAmount,
          bookingId: createBookingId,
          bookingType: type
      })
      toast.success("Booking Successfully....")
      } catch (error) {
        console.log(error);
      }
    }

    

    useEffect(() => {
      if(render){
        confirmBooking()
      }
    },[])
  if(url[2] !== 'checkout.stripe.com'){
    return <Navigate to="/" />
}
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        {/* <img src={paymentSuccesImg} alt="" /> */}
        <FaCheckCircle />
        <h1>Booking Successfully</h1>
        <div className='bookingConfirmationDetails'>
          
          <h3><span>Name : </span> <span>{name}</span></h3>
          <h3><span>Order ID : </span> <span>#{createBookingId}</span></h3>
          <h3><span>Total Amount: </span> <span>MYR {totalAmount}</span></h3>
          <h3><span>Date: </span> <span> {bookingDate}</span></h3>
          <h3>More Details Check Your Email</h3>
        </div>
      <button className='btn' onClick={() => dispatch(bookingConfirm())}>Go Home</button>
      </div>
    </section>
  )
}

export default PaymentSucess