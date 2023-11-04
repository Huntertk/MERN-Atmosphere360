import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <div>
            <Header />
        </div>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Layout