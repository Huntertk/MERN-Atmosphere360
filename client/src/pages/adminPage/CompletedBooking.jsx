import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getBookingStart, getCompletedSucess} from '../../features/bookingDetails/bookingDetailsSlice';
import '../../styles/allBookings.scss'

import BookingCard from '../../components/adminComponents/BookingCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const CompletedBooking = () => {
  const {completedBookingsDetails, loading} = useSelector(state => state.bookingDetails)
  const dispatch = useDispatch()
  const getCompletedBookings = async () => {
    try {
      dispatch(getBookingStart())
      const res = await axios.get("/api/v1/booking/completed")
      dispatch(getCompletedSucess(res.data.completedBookings))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getCompletedBookings()
  },[])

  if(loading) {
    return <LoadingSpinner />
  }

  if(!completedBookingsDetails.length === 0){
    return <div>
      <h1>You No Bookings Now</h1>
    </div>
  }
  return (
    <div className='allBookingsContainer'>
      {completedBookingsDetails.map((booking,index) => {
       return <BookingCard key={booking._id} booking={booking} index={index} />
      })}
    </div>
  )
}

export default CompletedBooking