import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getBookingStart, getAllBookingSuccess, getConfirmedSucess, getCancelledSucess} from '../../features/bookingDetails/bookingDetailsSlice';
import '../../styles/allBookings.scss'

import BookingCard from '../../components/adminComponents/BookingCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const CancelledBooking = () => {
  const {cancelledBookingsDetails, loading,updateBookingStatus} = useSelector(state => state.bookingDetails)
  const dispatch = useDispatch()
  const getCancelledBookings = async () => {
    try {
      dispatch(getBookingStart())
      const res = await axios.get("/api/v1/booking/cancelled")
      dispatch(getCancelledSucess(res.data.cancelledBookings))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getCancelledBookings()
  },[updateBookingStatus])

  if(loading) {
    return <LoadingSpinner />
  } 

  if(cancelledBookingsDetails.length === 0){
    return <div>
       <h1>No Bookings Now</h1>
    </div>
  }
  return (
    <div className='allBookingsContainer'>
      {cancelledBookingsDetails.map((booking,index) => {
       return <BookingCard key={booking._id} booking={booking} index={index} />
      })}
    </div>
  )
}

export default CancelledBooking