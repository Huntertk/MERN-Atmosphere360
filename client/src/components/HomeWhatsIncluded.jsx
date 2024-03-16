import React from 'react'
import '../styles/HomeWhatsIncluded.scss'
import { BiSolidDollarCircle } from 'react-icons/bi';


const HomeWhatsIncluded = () => {
  return (
    <section className='whatsincludedContainer'>
         <div className="cancellationSubContainer">
            <h1>Cancellation policy</h1>
            <div className="content">
                <BiSolidDollarCircle  />
                <p>These tickets can't be cancelled or rescheduled</p>
            </div>
        </div>
        <div className="whatsincludedSubContainer">
            <h1>Inclusions</h1>
            <ul className="content">
                <li>Entrance for Buffet Dinner</li>
                <li>Free Observation Deck Entry</li>
            </ul>
        </div>
        <div className="whatsNotincludedSubContainer">
        <h1>Exclusions</h1>
        <div className="contentContainer">
        <ul className="content">
                <li>Parking</li>
            </ul>
            <ul className="content">
                <li>Other Attractions</li>
            </ul>
            <ul className="content">
                <li>Photos</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default HomeWhatsIncluded