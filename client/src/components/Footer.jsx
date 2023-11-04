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
                    <p>Call Us</p>
                    <p>Email Us</p>
                </div>
                <div className="legalContainer">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Company Details</p>
                    <Link to="/admin/login"><p>Admin</p></Link>
                </div>
            </div>
            <div className="icons">
                <BsFacebook />
                <FaXTwitter />
                <BsInstagram />

            </div>
        </div>
    </section>
  )
}

export default Footer