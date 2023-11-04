import React, { useState } from 'react'
import '../../styles/adminSmallSidebar.scss'
import { NavLink } from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { adminSidebarClose } from '../../features/admin/adminSlice'
import {RiAdminFill} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import {AiFillCheckSquare} from 'react-icons/ai'
import {MdOutlinePending} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'
import {GiConfirmed} from 'react-icons/gi'

const AdminSmallSidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className='smallSidebarWrapper'>
      <div className="smallSidebarContainer">
        <h1>Dashboard <RiAdminFill /></h1>
        <ImCross className='crossIcon' onClick={() => dispatch(adminSidebarClose())} />
          <NavLink 
          to="/admin/all-booking"
          onClick={() => dispatch(adminSidebarClose())}
          ><VscGraph /> All Booking</NavLink>
          <NavLink 
          to="/admin/confirmed-booking"
          onClick={() => dispatch(adminSidebarClose())}
          ><GiConfirmed /> Confirmed Booking</NavLink>
          <NavLink 
          to="/admin/completed-booking"
          onClick={() => dispatch(adminSidebarClose())}
          ><AiFillCheckSquare /> Completed Booking</NavLink>
          <NavLink 
          to="/admin/pending-booking"
          onClick={() => dispatch(adminSidebarClose())}
          ><MdOutlinePending /> Pending Booking</NavLink>

          <NavLink to="/admin/cancelled-booking"
           onClick={() => dispatch(adminSidebarClose())}
          ><ImCancelCircle /> Cancelled Booking</NavLink>
      </div>
    </div>
  )
}

export default AdminSmallSidebar