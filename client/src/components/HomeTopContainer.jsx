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
            <img src={"https://res.cloudinary.com/drrkaak40/image/upload/v1710588755/Malaysia%20Experience/Aras%20Resturant/IMG-20240129-WA0076_urqfyw.jpg"} alt="ARAS Restaurant KL Tower" />
        </div>
    </section>
  )
}

export default HomeTopContainer