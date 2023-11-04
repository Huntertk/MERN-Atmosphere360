import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminSmallSidebar from './AdminSmallSidebar'
import AdminBigSidebar from './AdminBigSidebar'
import { useSelector } from 'react-redux'
import '../../styles/adminLayout.scss'

const AdminLayout = () => {
  const {isSidebarOpen} = useSelector(state => state.admin)
  return (
    <>
        <AdminHeader />
        <div id='mainContainerWrapper'>
            <div className="sidebars">
              {
                isSidebarOpen && <AdminSmallSidebar />
              }
              <AdminBigSidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default AdminLayout