import '../styles/helpcenter.scss'
import logo from '../assets/images/logo.png'

const HelpCenter = () => {
  return (
    <section className='companyPolicyMainContainer'>
        <img src={logo} alt="logo" />
        <h1 className='heading'>Bookings</h1>
        <div className="underline"></div>
        <h1>Q: How do I make a booking on Malaysia Experience?</h1>
        <p>-- Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away.</p>
        <h1>Q: Is it safe to book through Malaysia Experience?</h1>
        <p>-- Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience.</p>
        <h1>Q: Can I book for a group?</h1>
        <p>-- Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time.</p>

        <h1 className='heading'>Cancellation/Refund</h1>
        <div className="underline"></div>
        <h1>Q: What is the cancellation policy?</h1>
        <p>We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process.</p>
        <h1>Q: How do I cancel or request a refund?</h1>
        <p>If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance.</p>
        <h1>Q: What happens if the experience is canceled by Malaysia Experience?</h1>
        <p>In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities.</p>
        <div className="underline"></div>
        <p>Remember, our friendly customer support team is ready to assist you with any questions or concerns you may have. Happy exploring!</p>
    </section>
  )
}


export default HelpCenter