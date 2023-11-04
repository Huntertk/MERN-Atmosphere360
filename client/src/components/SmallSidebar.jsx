import React, { useState } from 'react'
import '../styles/sidebar.scss'



import { navData } from '../data'
import SidebarNavlinks from './SidebarNavlinks'

const SmallSidebar = () => {
 

  return (
    <div className='sideNavLinksContainer'>
      {
        navData.map((data) => {
          return (
              <SidebarNavlinks data={data} key={data.id} />
          )
        })
      }
    </div>
  )
}

export default SmallSidebar