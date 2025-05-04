import React from 'react'
import productImg from '../assets/Image/productimg.png'

const ProductItems = () => {
  return (
    <>
      <div className="w-[285px] relative group">
        <img src={productImg} alt="" />
        <div className="productCard bg-[#F4F5F7] px-[18px] pt-[16px] pb-[30px]">
            <h2 className='Cardtittle'>Product Name</h2>
            <p className='text-[16px] font-poppins font-medium text-[#898989] mt-2'>Stylish cafe chair</p>
            <div className="price w-[249px] flex items-end justify-between mt-[8px]">
                <p className='text-[20px] font-poppins font-semibold text-[#3A3A3A]'>BDT 2.500.00</p>
                <p className='text-[16px] font-poppins font-normal text-[#666666] line-through'>BDT 3.500.00</p>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center bg-[#3a3a3a65] scale-0 group-hover:scale-100 transition-all duration-[0.2s] ">
         <button className='px-[54px] py-[12px] bg-[#fff] sm:text-[16px] font-poppins font-bold text-[#B88E2F] mt-[25px] sm:mt-[45px]'>Add to cart</button>
         </div>
      </div>
    </>
  )
}

export default ProductItems
