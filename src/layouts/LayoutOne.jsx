import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResponsiveNav from '../components/ResponsiveNav'

const LayoutOne = () => {
    return (
        <>
            <Navbar />
            <ResponsiveNav />
            <Outlet />    
            <Footer />
        </>
  )
}

export default LayoutOne