import React from 'react'
import logo from '../assets/images/logo.png'
import '../styles/footer.scss'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footerMainContainer">
            <div className="footerTopContainer">
                <img src={logo} alt="" />
                <p>Malaysia Experience</p>
            </div>
            <div className="middleContainer">
                <div className="getHelpContainer">
                    <p>Chat With Us</p>  
                    <a href="tel:+60356124646">
                        <p>Call Us</p>
                    </a>
                    <p><a href="mailto:support@malaysia-experience.com"> Email Us </a></p>
                    <Link to={"/helpcenter"}>
                        <p>Help Center</p>
                    </Link>
                </div>
                <div className="legalContainer">
                    <Link to="/terms"><p>Terms & Conditions</p></Link>
                    <Link to="/privacypolicy"><p>Privacy Policy</p></Link>
                    <Link to="/companydetails">
                        <p>Company Details</p>
                    </Link>
                    <Link to="/admin/login"><p>Admin</p></Link>
                </div>
            </div>
            <div className="icons">
                <a href="https://m.facebook.com/travelvagoasia"><BsFacebook /></a>
                <a href="https://instagram.com/jomtravellocal?igshid=OGQ5ZDc2ODk2ZA==">
                    <BsInstagram />
                </a>
                    <FaXTwitter />

            </div>
        </div>
    </section>
  )
}

export default Footer