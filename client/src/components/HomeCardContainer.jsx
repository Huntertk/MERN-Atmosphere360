import React from 'react'
import '../styles/homeCardContainer.scss'
import { cardData } from '../data'
import HomeCard from './HomeCard';


const HomeCardContainer = () => { 
  return (
    <section className='HomeCardMainContainer'>
        {cardData.map((data) => {
            return <HomeCard key={data.id} data={data} />
        })}
    </section>
  )
}

export default HomeCardContainer