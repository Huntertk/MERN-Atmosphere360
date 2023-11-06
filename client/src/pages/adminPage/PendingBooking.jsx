import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import '../../styles/allBookings.scss'

import BookingCard from '../../components/adminComponents/BookingCard';
import { getBookingStart, getPendingSucess } from '../../features/bookingDetails/bookingDetailsSlice';
import LoadingSpinner from '../../components/LoadingSpinner';

const PendingBooking = () => {

   const {pendingBookingsDetails, loading, updateBookingStatus} = useSelector(state => state.bookingDetails)

  const dispatch = useDispatch()
  const getPendingBookings = async () => {
    try {
      dispatch(getBookingStart())
      const res = await axios.get("/api/v1/booking/pending")
      dispatch(getPendingSucess(res.data.pendingBookings))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getPendingBookings()
  },[updateBookingStatus])

  if(loading) {
    return <LoadingSpinner />
  }

  if(pendingBookingsDetails.length === 0){
    
    return <div>
       <h1>No Bookings Now</h1>
    </div>
  }
  return (
   <div className='allBookingsContainer'>
      {pendingBookingsDetails.map((booking, index) => {
       return <BookingCard key={booking._id} booking={booking} index={index} />
      })}
    </div>
  )
}

export default PendingBooking