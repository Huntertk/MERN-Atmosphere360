import { useDispatch, useSelector } from 'react-redux'
import '../styles/PaymentSuccess.scss'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import paymentSuccesImg from '../assets/images/paymentSucces.png'
import { toast } from 'react-toastify';
import { bookingConfirm } from '../features/booking/bookingSlice';


const PaymentSucess = () => {
  const { bookingDate,
    adultCount,
    adultTotal,
    childCount,
    childTotal,
    infantCount,
    infantTotal,
    seniorCount,
    seniorTotal,
    totalAmount,
    loading,
    bookingResponse,
    name,
    email,
    mobileNumber
  } = useSelector(store => store.booking)
  const dispatch = useDispatch()
  const url = bookingResponse.split('/')
  const render = url[2] === 'checkout.stripe.com'
  console.log(render);
  const [bookingData, setBookignData] = useState(null)

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
      })
      console.log(data.bookingDetails);
      setBookignData(data.bookingDetails)
      toast.success("Booking Successfully")
      } catch (error) {
        console.log(error);
      }
    }


    useEffect(() => {
      if(render){
        confirmBooking()

      } else{

      }
    },[])
  if(url[2] !== 'checkout.stripe.com'){
    return <Navigate to="/" />
}
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <img src={paymentSuccesImg} alt="" />
        <h1>Booking Successfully</h1>
        <h1>{name}</h1>
        <h3>Order ID : {bookingData?._id}</h3>
        <h3>Date Of Booking : {bookingDate}</h3>

        <h3>Please Kindly Check Your Email</h3>
        <h4>Total Amount: MYR {totalAmount}</h4>
      </div>
      <button className='btn' onClick={() => dispatch(bookingConfirm())}>Go Home</button>
    </section>
  )
}

export default PaymentSucess