import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { getAllBooking } from '../../features/bookingDetails/bookingDetailsSlice';
import '../../styles/allBookings.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns';

const AllBookings = () => {
  const {allBookings} = useSelector(state => state.bookingDetails)
  const dispatch = useDispatch()
  const getAllBookings = async () => {
    try {
      const res = await axios.get("/api/v1/booking")
      dispatch(getAllBooking(res.data.allBookings))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllBookings()
  },[])
  return (
    <div className='allBookingsContainer'>
      {allBookings.map((booking,index) => {
        console.log(booking);
       return <div className="cardContainer" key={booking._id}>
        <span>{index + 1}</span>
          <p>Date of Reservation : {booking.bookingDate}</p>
          <p>Booked By : {booking.name}</p>
          <p>Contact : {booking.mobileNumber}</p>
          <p>Email : {booking.email}</p>
            <h3>Total Person</h3>
          <div className="personCount">
            <p>Adult X {booking.adultCount}</p>
            <p>Child X {booking.childCount}</p>
            <p>Infant X {booking.infantCount}</p>
            <p>Senior X {booking.seniorCount}</p>
          </div>
          <div className="bookingStatus">
            <span>Booking Status : </span>
            <select>
              <option value={booking.bookingStatus}>{booking.bookingStatus}</option>
              <option value={"confirmed"}>confirmed</option>
              <option value={"completed"}>completed</option>
              <option value={"cancelled"}>cancelled</option>
            </select>
            <button className='updateBtn'>update</button>
          </div>
          <p>Total Bill : MYR {booking.totalAmount}</p>
          <p>Order Created On : {format(new Date(booking.createdAt), 'MM/dd/yyyy')}</p>
          <p>Last Update at  {formatDistanceToNow(new Date(booking.updatedAt), { addSuffix: true })}</p>
      </div>
      })}
    </div>
  )
}

export default AllBookings