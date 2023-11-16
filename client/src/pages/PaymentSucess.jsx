import { useSelector } from 'react-redux'
import '../styles/PaymentSuccess.scss'

const PaymentSucess = () => {
  const state = useSelector(store => store.booking)
  console.log(state);
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <h1>Booking Successfully</h1>
        <h1>Thank You {state.name}</h1>
        <h3>Please Kindly Check Your Email</h3>
        <h4>Total Amount: MYR `{state.totalAmount}</h4>
      </div>
    </section>
  )
}

export default PaymentSucess