import React from 'react'
import itemimg from './../../assets/Image/setup-6.png'
import { IoIosCloseCircle } from 'react-icons/io'

const CardItems = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
            <div className="w-[108px] h-[105px] rounded-lg overflow-hidden">
                <img src={itemimg} alt="" />
            </div>
            <div className={`ml-8 `}>
                <h2 className='text-[16px] font-poppins font-[400]'>Asgaard sofa</h2>
                <div className="flex gap-[15px] items-center">
                    <p className=' text-[16px] font-poppins font-[300]'>1</p>
                    <p className=' text-[16px] font-poppins font-[300]'>X</p>
                    <p className='font-poppins font-medium text-[16px] text-[#B88E2F]'>$ 1,200.00</p>
                </div>
            </div>
        </div>
        <div className="">
            <IoIosCloseCircle className='w-[30px] h-[30px] text-[#9F9F9F]'/>
        </div>
      </div>
    </>
  )
}

export default CardItems
