import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

const AdminProtectedRoute = () => {
    const {adminEmail} = useSelector(state => state.admin)
  return adminEmail ? <Outlet /> : <Navigate to="/" />
}

export default AdminProtectedRoute