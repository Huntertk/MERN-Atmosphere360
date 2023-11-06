import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getBookingStart, getAllBookingSuccess} from '../../features/bookingDetails/bookingDetailsSlice';
import '../../styles/allBookings.scss'

import BookingCard from '../../components/adminComponents/BookingCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const AllBookings = () => {
  const {allBookings, loading, updateBookingStatus} = useSelector(state => state.bookingDetails)
  const dispatch = useDispatch()
  const getAllBookings = async () => {
    try {
      dispatch(getBookingStart())
      const res = await axios.get("/api/v1/booking")
      dispatch(getAllBookingSuccess(res.data.allBookings))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllBookings()
  },[updateBookingStatus])

  if(loading) {
    return <LoadingSpinner />
  }

  if(allBookings.length === 0){
    return <div>
       <h1>No Bookings Now</h1>
    </div>
  }
  return (
    <div className='allBookingsContainer'>
      {allBookings.map((booking,index) => {
       return <BookingCard key={booking._id} booking={booking} index={index} />
      })}
    </div>
  )
}

export default AllBookings