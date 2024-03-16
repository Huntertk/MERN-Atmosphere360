import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/ramadan-dinner">Ramadan Dinner</Link>
        <Link to="/admin/manage-dates/dinner">Dinner</Link>
        <Link to="/admin/manage-dates/lunch">Lunch</Link>
        <Link to="/admin/manage-dates/tea">Tea</Link>
      </div>
    </section>
  )
}

export default ManageDates