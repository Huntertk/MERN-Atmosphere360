import React from 'react'
import '../styles/homeHighlights.scss';
import { cardHighLightsDetails } from '../data';
const Cards = () => {
  
    return  (
        cardHighLightsDetails.map((data) => {
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

const HomeHighlights = () => {
  return (
    <section className='HomeHighlightsMainContainer'>
        <h1>Atmosphere 360 highlights</h1>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default HomeHighlights