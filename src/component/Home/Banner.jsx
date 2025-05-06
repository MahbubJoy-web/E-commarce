import React from 'react'
import BannnerBG from '../../assets/Image/Banner_bg.png'
import Button from '../Button'

const Banner = () => {
  return (
    <>
    <div className="joy_banner sm:pt-[153px] pt-[100px] pb-[100px]" style={{ backgroundImage: `url(${BannnerBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
            <div className="bannerCard w-full mt-[153px] mb-[100px] flex justify-end">
                <div className="bg-[#FFF3E3] rounded-[10px] sm:px-[41px] sm:py-[50px] sm:w-[643px] px-[20px] py-[30px] w-full flex flex-col items-start justify-center">
                    <h2 className='text-[16px] font-poppins font-semibold tracking-[3px]'>New Arrival</h2>
                    <h3 className='sm:w-[400px] w-full sm:text-[52px] text-[32px] font-poppins font-bold sm:leading-[65px] text-[#B88E2F] mb-[25px]'>Discover Our New Collection</h3>
                    <p className='sm:w-[545px] w-full font-poppins font-medium sm:text-[18px] text-[14px] sm:leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Button tittle="Buy Now" path=""/>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Banner
