import paymentSuccesImg from '../assets/images/paymentSucces.png'
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FaCheckCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { bookingConfirm } from '../features/booking/bookingSlice';

const ConfirmBooking = () => {
    const { 
        bookingDate,
        totalAmount,
        name,
        bookingId
      } = useSelector(store => store.booking)

      const dispatch = useDispatch()
      if(!bookingId){
        return <Navigate to="/" />
      }

  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <FaCheckCircle />
        <h1>Booking Successfully</h1>
        <div className='bookingConfirmationDetails'>
          
          <h3><span>Name : </span> <span>{name}</span></h3>
          <h3><span>Order ID : </span> <span>#{bookingId}</span></h3>
          <h3><span>Total Amount: </span> <span>MYR {totalAmount}</span></h3>
          <h3><span>Date: </span> <span> {bookingDate}</span></h3>
          <h3>More Details Check Your Email</h3>
        </div>
      <button className='btn' onClick={() => dispatch(bookingConfirm())}>Go Home</button>
      </div>
    </section>
  )
}

export default ConfirmBooking