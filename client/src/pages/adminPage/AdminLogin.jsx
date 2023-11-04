import React, { useState } from 'react'
import '../../styles/adminLogin.scss'
import bgImg from '../../assets/images/adminLogin.jpg'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { adminLoginStart, adminLoginSuccess } from '../../features/admin/adminSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {adminEmail, loading, error} = useSelector(state => state.admin) 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdminLogin = async (e) => {
    e.preventDefault()
    try {
      dispatch(adminLoginStart())
      const res = await axios.post('/api/v1/admin/login', {email, password})
      dispatch(adminLoginSuccess(res.data.user))
      toast.success("Admin Login Successfully")
      navigate("/admin/all-booking")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg)
    }
  }


  return (
    <main className='mainContainer' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="loginFormWrapper">
            <form onSubmit={handleAdminLogin}>
                <h1>Admin Login</h1>
                <input 
                type="email" 
                placeholder='Email' 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='Password' 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' disabled={loading}>{loading ? "Loading...." : "login"}</button>
            </form>
        </div>
    </main>
  )
}

export default AdminLogin