import React, { useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns';
import '../../styles/allBookings.scss'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux';
import {updateBookingStats} from '../../features/bookingDetails/bookingDetailsSlice'

const BookingCard = (props) => {
  const dispatch = useDispatch()

    const {
      _id,
        bookingDate, 
        name, 
        mobileNumber,
        email,
        adultCount,
        childCount,
        infantCount,
        seniorCount,
        bookingStatus,
        createdAt,
        updatedAt,
        totalAmount
    }  = props.booking

    const [newBookingStatus, setNewBookingStatus] = useState("")
      const updateBooking = async () => {
        try {
          const res = await axios.patch(`/api/v1/booking/${_id}`, {bookingStatus: newBookingStatus})
          dispatch(updateBookingStats())
          toast.success(`Booking ${_id} is Updated`)
        } catch (error) {
           toast.error("Something Went Wrong")
        }
  }
  return (
    <div className="cardContainer">
        <span>{props.index + 1}</span>
        <span>Booking ID: {_id}</span>
          <p>Date of Reservation : {bookingDate}</p>
          <p>Booked By : {name}</p>
          <p>Contact : {mobileNumber}</p>
          <p>Email : {email}</p>
            <h3>Total Person</h3>
          <div className="personCount">
            <p>Adult X {adultCount}</p>
            <p>Child X {childCount}</p>
            <p>Infant X {infantCount}</p>
            <p>Senior X {seniorCount}</p>
          </div>
          <div className="bookingStatus">
            <span>Booking Status : </span>
            <select onChange={(e) => setNewBookingStatus(e.target.value)}>
              <option value={bookingStatus}>{bookingStatus}</option>
              <option value={"confirmed"}>confirmed</option>
              <option value={"completed"}>completed</option>
              <option value={"cancelled"}>cancelled</option>
              <option value={"pending"}>pending</option>
            </select>
            <button className='updateBtn' onClick={updateBooking}>update</button>
          </div>
          <p className='totalBill'>Total Bill : MYR {totalAmount}</p>
          <p>Order Created On : {format(new Date(createdAt), 'MM/dd/yyyy')}</p>
          <p>Last Update at  {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}</p>
      </div>
  )
}

export default BookingCard