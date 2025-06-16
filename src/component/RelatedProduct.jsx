import React from 'react'
import ProductItems from './ProductItems'

const RelatedProduct = () => {
  return (
    <div className='pt-[55px] pb-[92px]'>
      <div className="container">
        <div className="text mb-[36px]">
            <h2 className='text-[36px] font-poppins font-medium text-center '>Related Products</h2>
        </div>
        <div className="flex justify-center">
            <div className="w-[1236px] grid grid-cols-4 gap-[30px]">
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
            </div>
        </div>
        <div className="text-center mt-[44px]">
                 <button className=' w-[245px] px-[74px] py-[12px] text-[#B88E2F] font-poppins font-semibold text-[16px] border-[1px] border-[#B88E2F]'>Show More</button>
              </div>
      </div>
    </div>
  )
}

export default RelatedProduct
