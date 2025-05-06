import React from 'react'
import ProductItems from '../ProductItems'


const OurProduct = () => {
  return (
    <>
      <div className="Product pt-[56px] pb-[69px]">
        <div className="container">
           <h2 className='tittle !text-[40px] text-center mb-[32px]'>Our Products</h2>
           <div className="flex justify-center">
                <div className="w-[1236px] grid grid-cols-4 gap-[30px]">
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                </div>
           </div>
              <div className="text-center mt-[32px]">
                 <button className=' w-[245px] px-[74px] py-[12px] text-[#B88E2F] font-poppins font-semibold text-[16px] border-[1px] border-[#B88E2F]'>Show More</button>
                 </div>
        </div>
      </div>
    </>
  )
}

export default OurProduct
