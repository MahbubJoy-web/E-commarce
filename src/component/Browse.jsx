import React from 'react'
import img1 from '../assets/Image/browser1.png'
import img2 from '../assets/Image/browser2.png'
import img3 from '../assets/Image/browser3.png'

const Browse = () => {
  return (
    <>
      <div className="Browser py-[56px]">
        <div className="container">
            <div className="">
                <h2 className="tittle text-center">Browse The Range</h2>
                <p className='text-[20px] font-poppins font-normal text-[#666666] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="browseCard w-full flex flex-wrap gap-5 items-center justify-center mt-[62px]">
                <div className="">
                    <img src={img1} alt="image1" className='w-full' />
                    <p className='Cardtittle text-center mt-[30px]'>Dining</p>
                </div>
                <div className="">
                    <img src={img2} alt="image2" className='w-full'/>
                    <p className='Cardtittle text-center mt-[30px]'>Living</p>
                </div>
                <div className="">
                    <img src={img3} alt="image3" className='w-full'/>
                    <p className='Cardtittle text-center mt-[30px]'>Bedroom</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Browse
