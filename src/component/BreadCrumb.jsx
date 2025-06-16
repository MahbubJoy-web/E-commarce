import React from 'react'
import { Link, Links, useLocation } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";
const breadcrumb = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    const path2 = location.pathname.split('/')[2];

  return (
    <>
    <ul className='flex items-center gap-[6px] text-[16px] font-poppins font-medium text-[#000000] justify-center mt-3'>
        <li>
            <Link to="/" className=''>Home</Link>
        </li>
        <li>
           <FaChevronRight/>
           </li>
        <li>
            <Link to={`/${path}`} className='font-light'>{path}</Link>
        </li>
        {
          path2 &&
          <>  
          <li>
            <FaChevronRight/>
            </li>
          <li>
              <p className='font-normal text-[16px] text-[#000] border-l-2 border-l-[#9F9F9F] pl-[34px] ml-6'>{path2}</p>
          </li>
          </>
        }
    </ul> 
    </>
  )
}

export default breadcrumb
