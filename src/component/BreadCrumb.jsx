import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";
const breadcrumb = () => {
    const path = window.location.pathname.split('/').filter((x) => x);;
    
  return (
    <>
    <ul className='flex items-center gap-[6px] text-[16px] font-poppins font-medium text-[#000000] justify-center mt-3'>
        <li>
            <Link to="/" className=''>Home</Link>
        </li>
        <li><FaChevronRight/></li>
        <li>
            <p className='font-light'>{path}</p>
        </li>
    </ul> 
    </>
  )
}

export default breadcrumb
