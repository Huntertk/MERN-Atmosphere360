import React from 'react'
import '../styles/homeTopContainer.scss'
import image from '../assets/images/hometopimg.avif'

const HomeTopContainer = () => {

  return (
    <section className='HomeTopContainer'>
        <div className="content">
            <h1>Reserve a fantastic dining experience at ARAS Restaurant</h1> 
        </div>
        <div className="homeTopImgContainer">
            <img src={image} alt="" />
        </div>
    </section>
  )
}

export default HomeTopContainer