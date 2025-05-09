import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import itemimg from './../../assets/Image/setup-6.png'


const CartPageItems = () => {
  return (
    <>
                  <div className="flex">
                              <div className="w-[108px] h-[105px] rounded-lg overflow-hidden">
                                  <img src={itemimg} alt="" />
                              </div>
                              <div className="ml-[30px] flex gap-[69px] items-center">
                                  <h2 className='text-[16px] font-poppins font-normal text-[#9F9F9F]'>Asgaard sofa</h2>
                                  <p className='text-[16px] font-poppins font-normal text-[#9F9F9F]'>Rs. 250,000.00</p>
                                  <input type="text" value={1} className='px-[13px] py-[4px] w-[35px] h-[35px] border-[1px] border-[#9F9F9F] rounded-[5px] outline-none' />
                              
                                  <p className='text-[16px] font-poppins font-normal text-[#000]'>Rs. 250,000.00</p>
                              <RiDeleteBin2Fill className='w-7 h-7 text-[#B88E2F]'/>
                              </div>
                              <h2></h2>
                          </div>
    </>
  )
}

export default CartPageItems
