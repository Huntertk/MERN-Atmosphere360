import { useDispatch, useSelector } from 'react-redux'
import '../styles/PaymentSuccess.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import paymentSuccesImg from '../assets/images/paymentSucces.png'
import { FaCheckCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { bookingConfirm, settingBookingResponse } from '../features/booking/bookingSlice';
import LoadingSpinner from '../components/LoadingSpinner';


const PaymentSucess = () => {
  const navigate = useNavigate()
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
        dispatch(settingBookingResponse({createBookingId}))
        // navigate("/bookingconfirm")
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
    return <Navigate to="/bookingconfirm" />
}
  return (
    <LoadingSpinner />
  )
}

export default PaymentSucess