import React from 'react'
import { BsBagX } from 'react-icons/bs'
import CardItems from './CardItems'
import { Link } from 'react-router-dom'

const SideCart = ({close}) => {
  return (
    <>
      <div className="fixed top-0 right-0 w-full h-full bg-black/50 z-10">
        <div className="bg-white w-[417px] h-[746px] py-[20px] pl-[24px] pr-[40px] flex flex-col gap-4 right-0 absolute">
            <div className="flex items-center justify-between border-b-[1px] border-b-[#E5E5E5] pb-[24px]">
                <h2 className='font-poppins font-semibold text-2xl '>Shopping Cart</h2>
                <BsBagX className='w-6 h-6 text-[#9F9F9F]' onClick={close} />
            </div>
            <div className="mt-[42px] h-[490px] flex flex-col gap-[20px] overflow-y-scroll">
                <CardItems/>
                <CardItems/>
                <CardItems/>
                <CardItems/>
                <CardItems/>
            </div>
            <div className="pl-[24px] pr-[40px] bottom-0 left-0 right-0 translate-x-0 translate-y-0">
                <div className="flex items-center justify-between">
                    <h2 className='font-poppins font-normal text-[16px] '>Subtotal</h2>
                    <p className='font-poppins font-medium text-[18px] text-[#B88E2F]'>$ 1,200.00</p>
                </div>
                <div className="flex justify-center border-t-[1px] border-b-[#E5E5E5] pt-[26px] pb-[10px] gap-[14px]">
                    <Link className='px-[30px] py-[6px] rounded-[50px] border-[1px] border-[#000] text-black font-poppins font-normal text-xl'>Cart</Link>
                    <Link className='px-[30px] py-[6px] rounded-[50px] border-[1px] border-[#000] text-black font-poppins font-normal text-xl'>Checkout</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SideCart
