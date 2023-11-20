import React, { useEffect, useState } from 'react'
import '../styles/homeCardContainer.scss'
// import { cardData } from '../data'
import HomeCard from './HomeCard';
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'


const HomeCardContainer = () => { 
  const [cardData, setCardData] = useState(null)


  const getCardData = async () => {
    try {
      const {data} = await axios.get('/api/v1/bookingplan/getallbookingplan')
      console.log(data);
      setCardData(data.bookingPlan)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getCardData()
  },[])

  if(!cardData){
    return <LoadingSpinner />
  }
  return (
    <section className='HomeCardMainContainer'>
        {cardData.map((data) => {
            return <HomeCard key={data._id} data={data} />
        })}
    </section>
  )
}

export default HomeCardContainer