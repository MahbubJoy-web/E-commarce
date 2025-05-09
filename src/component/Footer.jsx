import React from 'react'
import icon from '../assets/Image/Funiro..png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="border-t-[1px] border-[#E0E0E0]">
        <div className="container flex flex-col justify-center items-center">
            <div className="border-b-[1px] border-[#E0E0E0]  py-12 flex flex-wrap">
                <div className="">
                    <img src={icon} alt="" />
                    <p className='w-[285px] text-[16px] font-poppins font-normal text-[#9F9F9F] mt-[50px]'>400 University Drive Suite 200 Coral Gables, <br />
                    FL 33134 USA</p>
                </div>
                <div className="sm:ml-[136px] ml-[20px] w-[352px] flex flex-wrap justify-between mt-[50px] sm:mt-0">
                    <div className="Link">
                        <h2 className='text-[16px] font-poppins font-medium text-[#9F9F9F]'>Help</h2>
                        <div className="flex flex-col gap-[46px] text-[16px] font-poppins font-medium text-[#000] mt-[55px]">
                            <Link to="/">Home</Link>
                            <Link to="/product">Shop</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="Help">
                        <h2 className='text-[16px] font-poppins font-medium text-[#9F9F9F]'>Help</h2>
                        <div className="flex flex-col gap-[46px] text-[16px] font-poppins font-medium text-[#000] mt-[55px]">
                            <Link to="/">Payment Options</Link>
                            <Link to="/product">Returns</Link>
                            <Link to="/about">Privacy Policies</Link>
                        </div>
                    </div>
                </div>
                <div className="sm:ml-[72px] ml-[20px] mt-[50px] sm:mt-0">
                <h2 className='text-[16px] font-poppins font-medium text-[#9F9F9F] '>Newsletter</h2>
                    <div className="flex sm:gap-[8px] gap-[1px] text-[16px] font-poppins font-medium text-[#000] sm:mt-[55px] mt-7">
                        <input type="email" placeholder='Enter Your Email Address'className='w-[220px] underline underline-offset-1 outline-none'/>
                        <button className='text-[14px] font-poppins font-medium  underline underline-offset-1'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <h2 className='py-9 text-[16px] font-poppins font-normal'>2023 furino. All rights reverved</h2>
        </div>
    </div> 
    </>
  )
}

export default Footer
