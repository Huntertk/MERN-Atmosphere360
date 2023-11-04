import React, { useState } from 'react'
import '../../styles/adminHeader.scss' 
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiAlignLeft} from 'react-icons/bi'
import { adminLogout, adminSidebarOpen } from '../../features/admin/adminSlice'
import { toast } from 'react-toastify'
import axios from 'axios'

const AdminHeader = () => {
    const {adminEmail} = useSelector(state => state.admin)
    const dispatch = useDispatch()


    const handleLogout = async () => {
      try {
        const res = await axios.get('/api/v1/admin/logout')
        dispatch(adminLogout())
        console.log(res);
      } catch (error) {
        toast.error("Something went wrong....")
        console.log(error);
      }
    }
  return (
    <div id='adminHeaderMainContainer'>
        <div className="adminHeaderWrapper">
            <BiAlignLeft className='alignLeft' onClick={() => dispatch(adminSidebarOpen())} />
            <h1>Dashboard</h1>
            <ul>
                <li className='adminEmail'>{adminEmail} </li>
                <li><AiOutlineLogout onClick={handleLogout} /></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader