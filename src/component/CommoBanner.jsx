import React from 'react'
import bg from '../assets/Image/bg.jpg'
import BreadCrumb from './breadcrumb'
import logo from '../assets/Image/Logo.png'

const Commobanner = () => {
  return (
    <>
     <div  className="pt-[122px] pb-[97px] bg-center bg-cover bg-no-repeat bg-white/50 bg-blend-overlay" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
            <img src={logo} alt="" className='mx-auto' />
            <h2 className='text-5xl font-medium font-poppins text-center'>Shop</h2>
            <BreadCrumb/>
        </div>
    </div> 
    </>
  )
}

export default Commobanner
