import React from 'react'
import '../../styles/adminBigSidebar.scss'
import { NavLink } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import {AiFillCheckSquare} from 'react-icons/ai'
import {MdOutlinePending} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'
import {GiConfirmed} from 'react-icons/gi'


const AdminBigSidebar = () => {
  return (
    <aside className='bigSidebarWrapper'>
      <div className="bigSidebarContainer">
        <h1>Admin <RiAdminFill /></h1>
          <NavLink to="/admin/all-booking"><VscGraph /> All Booking</NavLink>
          <NavLink 
          to="/admin/confirmed-booking"
          ><GiConfirmed /> Confirmed Booking</NavLink>
          <NavLink to="/admin/completed-booking"><AiFillCheckSquare /> Completed Booking</NavLink>
          <NavLink to="/admin/pending-booking"><MdOutlinePending /> Pending Booking</NavLink>
          <NavLink to="/admin/cancelled-booking"><ImCancelCircle /> Cancelled Booking</NavLink>
      </div>
    </aside>
  )
}

export default AdminBigSidebar