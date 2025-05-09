import React from 'react'
import Commobanner from '../component/Commobanner'
import { Link } from 'react-router-dom'
import CartPageItems from '../component/Cart/CartPageItems'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { RiVerifiedBadgeLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaHeadset } from 'react-icons/fa'

const Cart = () => {
  return (
    <>
      <div className="">
        <div className="banner">
            <Commobanner BNtittle={'Cart'}/>
        </div>
        <div className="container mt-[72px] ">
            <div className="flex justify-center gap-8 mb-[80px]">
                <div className="">
                    <div className="w-[817px] h-fit bg-[#F9F1E7] py-[15px] px-[146px]">
                        <ul className='flex items-center justify-center gap-[130px] text-[16px] font-poppins font-medium text-[#000]'>
                            <li>Product</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Subtotal</li>
                        </ul>
                    </div>
                    <div className="mt-[55px] flex flex-col gap-[20px]">
                        <CartPageItems/>
                        <CartPageItems/>
                        
                    </div>

                </div>
                <div className="w-[393px] h-fit bg-[#F9F1E7] pt-[15px] pb-[89px] text-center">
                    <h2 className=' text-[32px] font-poppins font-semibold '>Cart Totals</h2>
                    <div className="mt-[61px] flex items-center justify-center gap-8">
                        <p className='text-[16px] font-poppins font-medium'>Subtotal</p>
                        <p className='text-[16px] font-poppins font-normal text-[#9F9F9F]'>$ 250,00.00</p>
                    </div>
                    <div className="flex items-center justify-center gap-8 mt-8 mb-[40px]">
                        <p className='text-[16px] font-poppins font-medium'>Total</p>
                        <p className='text-xl font-poppins font-medium text-[#B88E2F]'>$ 250,00.00</p>
                    </div>
                        <Link className='px-[30px] py-[6px] rounded-[10px] border-[1px] border-[#000] text-black font-poppins font-normal text-xl'>Checkout</Link>
                </div>
            </div>
        </div>
        <div className="bg-[#FAF3EA] py-[100px]">
            <div className="container">
                <div className=" flex gap-[55px] items-center justify-center flex-wrap">
                    <div className="flex items-center justify-center gap-[10px] ">
                        <HiOutlineTrophy className='w-[60px] h-[60px]'/>
                        <div className="">
                            <h2 className='text-[26px] font-poppins font-semibold'>High Quality</h2>
                            <p className='text-xl font-poppins font-medium text-[#898989]'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[10px] ">
                        <RiVerifiedBadgeLine className='w-[60px] h-[60px]'/>
                        <div className="">
                            <h2 className='text-[26px] font-poppins font-semibold'>Warranty Protection</h2>
                            <p className='text-xl font-poppins font-medium text-[#898989]'>Over 2 years</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[10px] ">
                        <TbTruckDelivery  className='w-[60px] h-[60px]'/>
                        <div className="">
                            <h2 className='text-[26px] font-poppins font-semibold'>Free Shipping</h2>
                            <p className='text-xl font-poppins font-medium text-[#898989]'>cOrder over 150 $</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[10px] ">
                        <FaHeadset className='w-[60px] h-[60px]'/>
                        <div className="">
                            <h2 className='text-[26px] font-poppins font-semibold'>24 / 7 Support</h2>
                            <p className='text-xl font-poppins font-medium text-[#898989]'>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart
