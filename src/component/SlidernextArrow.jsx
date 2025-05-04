import React from 'react'
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";

const SlidernextArrow = ({onClick}) => {
  return (
    <div
    className='cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-[#fff] text-[24px] text-[#B88E2F] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] absolute top-[50%] right-[-20px] translate-y-[-50%] z-10'
      onClick={onClick}
    >
       <IoIosArrowForward />
    </div>
  )
}

export default SlidernextArrow
