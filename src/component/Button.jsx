import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ tittle, path}) => {
  return (
    <>
     <Link to={path} className='px-[72px] py-[25px] bg-[#B88E2F] sm:text-[16px] font-poppins font-bold text-[#fff] mt-[25px] sm:mt-[45px]'>{tittle}</Link> 
    </>
  )
}

export default Button
