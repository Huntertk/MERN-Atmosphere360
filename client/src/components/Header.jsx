import React, { useState } from 'react'
import '../styles/header.scss'
import logo from '../assets/images/logo.png'
import {GoGlobe} from 'react-icons/go'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {RxCross1} from 'react-icons/rx'
import SmallSidebar from './SmallSidebar'
import BigNavbar from './BigNavbar'
import { Link } from 'react-router-dom'
import tvagologo from '../assets/images/tvagologo.png'

const Header = () => {



    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavbar = () => {
        setIsNavOpen((prev => !prev))
    }
  return (
    <header>
        <nav >
            <div className="logoContainer">
               <Link to="/"> <img src={logo} alt="" /> <span>By</span> <img className='companyImg' src={tvagologo} alt="Image" /> </Link>
            </div>
            {/* <div className='headerSideContainer'>
                    <GoGlobe />
                <div className="iconsContainer" onClick={handleNavbar}>
                    {
                        isNavOpen ? <RxCross1 /> : <IoReorderThreeOutline className='hamburger' />
                    }
                </div>
            </div> */}
        </nav>
        {/* <BigNavbar />
        {
        isNavOpen && <SmallSidebar />
        } */}
    </header>
  )
}

export default Header