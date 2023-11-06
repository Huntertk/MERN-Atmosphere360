import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getBookingStart, getAllBookingSuccess, getConfirmedSucess} from '../../features/bookingDetails/bookingDetailsSlice';
import '../../styles/allBookings.scss'

import BookingCard from '../../components/adminComponents/BookingCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const ConfirmedBooking = () => {
  const {confirmedBookingsDetails, loading, updateBookingStatus} = useSelector(state => state.bookingDetails)
  const dispatch = useDispatch()
  const getConfirmedBookings = async () => {
    try {
      dispatch(getBookingStart())
      const res = await axios.get("/api/v1/booking/confirmed")
      dispatch(getConfirmedSucess(res.data.confirmedBookings))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getConfirmedBookings()
  },[updateBookingStatus])

  if(loading) {
    return <LoadingSpinner />
  } 

  if(confirmedBookingsDetails.length === 0){
    return <div>
       <h1>No Bookings Now</h1>
    </div>
  }
  return (
    <div className='allBookingsContainer'>
      {confirmedBookingsDetails.map((booking,index) => {
       return <BookingCard key={booking._id} booking={booking} index={index} />
      })}
    </div>
  )
}

export default ConfirmedBooking