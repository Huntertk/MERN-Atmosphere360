import '../styles/policypage.scss'
import logo from '../assets/images/logo.png'
import TermsAndConditionMailPoint from '../components/TermsAndConditionMailPoint'

const PrivacyPolicy = () => {
  return (
    <section className='companyPolicyMainContainer'>
        <img src={logo} alt="logo" />
        <h1>Our Commitment to Your Privacy</h1>
        <div className="underline"></div>
        <p>At Malaysia Experience by Travelvago Sdn Bhd we prioritize the protection and responsible handling of your personal information. This Privacy Policy outlines our practices regarding the collection, processing, and safeguarding of your data when using our platform. It is an integral part of our Terms of Use and aims to inform users about their privacy rights.</p>
        <TermsAndConditionMailPoint heading="Your Agreement to this Policy" para="By accessing our platform, you agree to the collection and processing of your personal information in accordance with this Privacy Policy. This information is essential for us to provide the best possible services on our platform. If you have any concerns or questions, reach out to us at " mailId={"privacy@travelvago.com"} />
        <ul>
            <h3>Key Definitions</h3>
            <li><span>Account : </span> A unique account created for you on the platform.</li>
            <li><span>Company : </span>  Refers to Malaysia Experience by Travelvago Sdn Bhd.</li>
            <li><span>Cookies : </span> Small files placed on your device by our platform for various purposes.</li>
            <li><span>Device : </span> Any device used to access the platform, such as a computer or mobile device.</li>
            <li><span>Personal Information : </span> Information related to an identified or identifiable user, collected for service provision and legal obligations.</li>
        </ul>
        <h1>Why We Collect Your Personal Information</h1>
        <p>Malaysia Experience by Travelvago sdn bhd connects users with service providers to facilitate bookings. We collect personal information to provide platform services and for various outlined processing activities.</p>
        <ul>
            <h3>Types of Information Collected:</h3>
            <li><span> 1. Non-Identifiable Personal Information : </span> Aggregated data, masked IP addresses, etc.</li>
            <li><span> 2. Personally Identifiable Information : </span> Name, social security number, contact details, etc.</li>
            <li><span> 3. Automated Information : </span> Device details, IP information, behavioral patterns, date, and time of access.</li>
        </ul>

        <TermsAndConditionMailPoint heading="Use of Cookies" para="We use cookies to track platform usage, store information, and enhance user experience. Cookies can be session or persistent, serving different purposes outlined in our policy." />

        <TermsAndConditionMailPoint heading="How We Use and Share Your Personal Information" para="Your information is used lawfully to provide services, and we do not sell or rent it. We may share it with third parties, such as vendors, affiliates, payment partners, service providers, or for legal purposes." />
        <TermsAndConditionMailPoint heading="User-Generated Content and Social Media" para="Content posted by users, including reviews and interactions on social media, is considered user-generated content. When users create accounts using social media, we may capture personal information as outlined in our policy." />
        <TermsAndConditionMailPoint heading="Data Collection from Children" para="As per our Terms of Use, bookings are suggested for individuals of the age of majority. We prioritize the privacy of children and handle their information lawfully, with appropriate consent." />
        <TermsAndConditionMailPoint heading="Data Retention and Security" para="We retain your personal information for the necessary period and implement security measures to prevent unauthorized access. Your data is stored on servers in the USA or other countries." />
        <TermsAndConditionMailPoint heading="Your Rights" para="For data privacy requests or complaints, contact us at privacy@travelvago.com. You have the right to access, delete, or obtain a copy of your information, and we verify the requester's identity for security." />
        <TermsAndConditionMailPoint heading="Changes to Our Privacy Policy" para="We may update our Privacy Policy, and changes are effective when posted on our platform. Please review this policy periodically for any updates." />
        <div className="underline"></div>
        <p>Malaysia Experience management by Travelvago, an approved and reliable partner of the venue, presents handpicked experiences tailored for your enjoyment at this attraction</p>
    </section>
  )
}

export default PrivacyPolicy