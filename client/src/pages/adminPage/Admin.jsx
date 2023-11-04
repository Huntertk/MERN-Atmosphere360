import React from 'react'
import '../../styles/adminPage.scss'
import { useSelector } from 'react-redux'

const Admin = () => {
  const {adminEmail} = useSelector(state => state.admin)
  console.log(adminEmail);
  return (
    <main>
        dsad
    </main>
  )
}

export default Admin