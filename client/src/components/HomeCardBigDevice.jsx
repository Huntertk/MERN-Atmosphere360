import React from 'react'
import '../styles/homeCardBigDevice.scss';
import {AiOutlineSafety, AiOutlineMobile} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {GiHotMeal} from 'react-icons/gi'

const HomeCardBigDevice = () => {
  return (
    <section className='HomeCardBigDeviceMainContainer'>
        <div className="cardMainContainer">
           <img src="https://cdn-imgix.headout.com/tour/37161/TOUR-IMAGE/ebe383f4-1ac5-468d-a0f8-185f93a7a9f6-19083-kuala-lumpur-atmosphere-360-revolving-restaurant---dinner-buffet-04.jpg?auto=format&w=288&h=384&q=90&fit=crop&ar=3%3A4" alt="" />
        </div>
    </section>
  )
}

export default HomeCardBigDevice