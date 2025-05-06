import React from 'react'
import { HiAdjustmentsVertical } from 'react-icons/hi2'

const Filter = () => {
  return (
    <>
      <div className="py-[22px] bg-[#F9F1E7]">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className=" flex justify-center items-center ">
                    <p className='flex items-center gap-3 text-[20px] font-[400] font-poppins text-[#000000] cursor-pointer pr-[30px]'>
                        <HiAdjustmentsVertical className='w-6 h-6'/>
                        Filter
                    </p>
                    <p className='!text-[16px] pl-4 border-l border-[#9F9F9F]'>Showing 1–16 of 32 results</p>
                </div>
                <div className="flex items-center gap-7">
                    <div className="">
                        <label htmlFor="" className='text-xl font-poppins font-normal pr-4'>Show</label>
                        <input type="number" value='16' className='w-[55px] h-[55px] text-xl font-poppins font-normal text-[#9F9F9F]  text-center outline-none' />
                    </div>
                    <div className="">
                        <label htmlFor="" className='text-xl font-poppins font-normal pr-4'>Short by</label>
                        <select name="" id="" className='w-[185px] h-[55px] text-xl font-poppins font-normal text-[#9F9F9F] text-center outline-none'>
                            <option value="defualt">Default</option>
                            <option value="defualt">Discount</option>
                            <option value="defualt">New</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Filter
