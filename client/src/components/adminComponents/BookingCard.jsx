import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns';
import '../../styles/allBookings.scss'

const BookingCard = (props) => {
    const {
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
  return (
    <div className="cardContainer">
        <span>{props.index + 1}</span>
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
            <select>
              <option value={bookingStatus}>{bookingStatus}</option>
              <option value={"confirmed"}>confirmed</option>
              <option value={"completed"}>completed</option>
              <option value={"cancelled"}>cancelled</option>
              <option value={"pending"}>pending</option>
            </select>
            <button className='updateBtn'>update</button>
          </div>
          <p>Total Bill : MYR {totalAmount}</p>
          <p>Order Created On : {format(new Date(createdAt), 'MM/dd/yyyy')}</p>
          <p>Last Update at  {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}</p>
      </div>
  )
}

export default BookingCard