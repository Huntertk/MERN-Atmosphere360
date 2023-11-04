import React from 'react'
import '../styles/homeTicketExplaination.scss'
import {FiChevronRight} from 'react-icons/fi'
import { bookTicketDetails } from '../data'

const CardContainer = () => {
    return (
        
            bookTicketDetails.map((data) => {
                return  <div className="whyVisitCardContainer" key={data.id}>
            <img src={data.image} alt="" />
            <h3>{data.title}</h3>

            <div className="listData">
                <ul>
                   {data.desc.map((item, index) => {
                    return <li key={index}>{item}</li>
                   })}
                </ul>
                <span className='bookNowBtn'>Book Ticket <FiChevronRight /></span>
            </div>
        </div>
    })
        
       
    )
}


const HomeTicketExplaination = () => {
  return (
    <section className='ticketDetailMainComponents'>
        
        <h1>All Your Atmosphere 360 Ticket Options Explained</h1>
        <div className="CardMainContainer">

            <CardContainer />
        </div>
    </section>
  )
}

export default HomeTicketExplaination