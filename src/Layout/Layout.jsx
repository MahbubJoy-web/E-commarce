import React from 'react'
import Navber from '../component/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

const Layout = () => {
  return (
    <>
     <Navber/>
     <Outlet/> 
     <Footer/>
    </>
  )
}

export default Layout
