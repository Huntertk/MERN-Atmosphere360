import React from 'react'
import '../styles/homeBuffetOption.scss'
import { homeBuffetOptions } from '../data'

const Cards = () => {
    
    return  (
        homeBuffetOptions.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
}

const HomeBuffetOption = () => {
  return (
    <section className='HomeBuffetOptionMainContainer'>
        <h1>Buffet Options at ARAS Restaurant</h1>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default HomeBuffetOption