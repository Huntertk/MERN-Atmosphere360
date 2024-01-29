import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import axios from 'axios';
import { adminLogout } from '../../features/admin/adminSlice';

const AdminProtectedRoute = () => {
  const {adminEmail} = useSelector(state => state.admin)
  const dispatch = useDispatch()

  const getAuth  = async() => {
    try {
      const {data} = await axios.get('/api/v1/booking')
    } catch (error) {
      if(error.response.status === 401){
        return dispatch(adminLogout())
      }
      console.log(error); 
    }
  }
  useEffect(() => {
    getAuth()
  },[])

  
  return adminEmail ? <Outlet /> : <Navigate to="/" />
}

export default AdminProtectedRoute