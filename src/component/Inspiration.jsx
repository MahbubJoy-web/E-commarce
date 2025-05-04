import React from 'react'
import Button from './Button'
import sliderimg1 from '../assets/Image/sliderimg.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlidernextArrow from './SlidernextArrow';

const Inspiration = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SlidernextArrow />,
    prevArrow: <div></div>,
  }
  return (
    <>
      <div className="bg-[#FCF8F3] mt-[69px] py-[44px] inspiration">
        <div className="container flex justify-center items-center">
            <div className="titlsec">
              <div className="w-[422px] ">
                <h2 className="tittle">50+ Beautiful rooms 
                inspiration
                </h2>
                <p className='text-[16px] font-poppins font-medium text-[#616161] mt-[7px]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className='px-[36px] py-[12px] bg-[#B88E2F] sm:text-[16px] font-poppins font-semibold text-[#fff] mt-[25px] '>Explore More</button>
              </div>
            </div>
            <div className="w-3/6 h-[581px]">
            <Slider {...settings}>
              <div className='slider_items'>
                <img src={sliderimg1} className='w-full h-full' alt="" />
              </div>
              <div className='slider_items'>
                <img src={sliderimg1} className='w-full h-full' alt="" />
              </div>
              <div className='slider_items'>
                <img src={sliderimg1} className='w-full h-full' alt="" />
              </div>
            </Slider>
            </div>
        </div>
      </div>
    </>
  )
}

export default Inspiration
