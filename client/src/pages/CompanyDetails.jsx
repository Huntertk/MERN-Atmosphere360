import '../styles/policypage.scss'
import logo from '../assets/images/logo.png'
import tvagologo from '../assets/images/tvagologo.png'

const CompanyDetails = () => {
  return (
    <section className='companyPolicyMainContainer'>
        <img src={logo} alt="logo" />
        <h1>Welcome to Malaysia Experience</h1>
        <div className="underline"></div>
        <p>Discover the Heart of Asia with Travelvago Sdn Bhd</p>
        <br />
        <p>At Malaysia Experience, we curate unforgettable journeys that go beyond the ordinary. Established in 2020 and proudly managed by Travelvago Sdn Bhd, our mission is to immerse you in the vibrant tapestry of Malaysia's diverse culture, breathtaking landscapes, and rich heritage.</p>
        <img src={tvagologo} alt="Image" /> 
        <ul>
          <h1>Our Passion for Unique Experiences</h1>
        <li>We believe in the power of travel to transform and enrich lives. That's why we handpick the most exceptional experiences, tours, and attractions across Malaysia. From the bustling streets of Kuala Lumpur to the tranquil beauty of Langkawi's beaches, each adventure is crafted to create lasting memories.</li>
        </ul>
        <ul>
            <h3>Why Choose Malaysia Experience?</h3>
            <li><span>Authenticity : </span> Immerse yourself in the authentic spirit of Malaysia with experiences that showcase the country's unique charm.</li>
            <li><span>Expert Curation : </span>  Our team of travel enthusiasts carefully selects each experience, ensuring a perfect blend of culture, adventure, and relaxation.</li>
            <li><span>Personalized Service : </span> We understand that every traveler is unique. That's why we offer personalized assistance to tailor your journey according to your preferences.</li>
        </ul>
        <h1>Your Gateway to Malaysia Awaits</h1>
        <div className="underline"></div>
        <p>Embark on a journey with Malaysia Experience and let the beauty of this enchanting nation captivate your senses. Whether you're a solo explorer, a couple seeking romance, or a family creating memories, our platform is your gateway to a world of discovery.</p>
        <p>Join us in unlocking the essence of Malaysia – where every experience is a story waiting to be told.</p>
        <p>Feel free to customize it further based on your brand voice and specific details you'd like to highlight!</p>
        <p>Malaysia Experience management by Travelvago, an approved and reliable partner of the venue, presents handpicked experiences tailored for your enjoyment at this attraction.</p>
    </section>
  )
}

export default CompanyDetails