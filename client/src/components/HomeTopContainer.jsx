import React from 'react'
import '../styles/homeTopContainer.scss'
import image from '../assets/images/hometopimg.avif'

const HomeTopContainer = () => {

  return (
    <section className='HomeTopContainer'>
        <div className="content">
            <h1>Reserve a fantastic dining experience at ARAS Restaurant KL Tower</h1>
        </div>
        <div className="homeTopImgContainer">
            <img src={"https://i.postimg.cc/gJ9QnyGd/IMG-20240129-WA0076.jpg"} alt="ARAS Restaurant KL Tower" />
        </div>
    </section>
  )
}

export default HomeTopContainer