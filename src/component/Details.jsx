import React from 'react'
import ProductSlide from "product-slide";
import { FaFacebook, FaLinkedin, FaStar, FaStarHalf } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
const API = {
    images: [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
    ],
  };
const Details = () => {
const [Quantity, setQuantity] = React.useState(1);



  // ========== Product Slide Settings ==============//
  const settings = {
    direction: "vertical", // or "vertical"
    zoom: false,          // or false
  };


  return (
    <>
     <div className="">
        <div className="container flex gap-[82px] justify-center">
            <div className="w-[553px] h-[500px]">
               <ProductSlide settings={settings} api={API.images} />
            </div>
            <div className="">
                <h2 className="text-[42px] font-poppins font-normal">Product Name</h2>
                <p className='text-[24px] font-poppins font-medium text-[#9F9F9F]'>Rs. 250,000.00</p>
                <div className="flex items-center mt-[15px]">
                  <ul className='text-[#FFC700] flex gap-[7px]'>
                    <li><FaStar className='w-[18px] h-[18px]'/></li>
                    <li><FaStar className='w-[18px] h-[18px]'/></li>
                    <li><FaStar className='w-[18px] h-[18px]'/></li>
                    <li><FaStar className='w-[18px] h-[18px]'/></li>
                    <li><FaStarHalf className='w-[18px] h-[18px]'/></li>
                  </ul>
                  <p className='text-[#9F9F9F] text-[13px] border-l border-[#9F9F9F] pl-[25px] ml-[18px]'>4.5 (100 Reviews)</p>
                </div>
                <p className="w-[424px] text-[13px] font-poppins font-normal text-[#000] mt-[18px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                <p className='text-sm font-poppins font-normal text-[#9F9F9F] mt-[22px]'>Size</p>
                <div className="flex gap-[16px] mt-[12px] text-[13px] font-poppins font-normal text-[#000] ">
                  <label htmlFor="" className='w-[30px] h-[30px] rounded-[5px] active:bg-[#B88E2F] active:text-[#fff] bg-[#F9F1E7] text-center leading-[30px]'>L</label>
                  <label htmlFor="" className='w-[30px] h-[30px] rounded-[5px] active:bg-[#B88E2F] active:text-[#fff] bg-[#F9F1E7] text-center leading-[30px]'>XL</label>
                  <label htmlFor="" className='w-[30px] h-[30px] rounded-[5px] active:bg-[#B88E2F] active:text-[#fff] bg-[#F9F1E7] text-center leading-[30px]'>XS</label>
                </div>
                <p className='text-sm font-poppins font-normal text-[#9F9F9F] mt-[22px]'>Color</p>
                <div className="flex gap-[16px] mt-[12px] text-[13px] font-poppins font-normal text-[#000] ">
                  <label htmlFor="" className='w-[30px] h-[30px] rounded-[50px] bg-[#816DFA] text-center leading-[30px]'></label>
                  <label htmlFor="" className='w-[30px] h-[30px] rounded-[50px] bg-[#000000] text-center leading-[30px]'></label>
                  <label htmlFor="" className='w-[30px] h-[30px] rounded-[50px] bg-[#B88E2F] text-center leading-[30px]'></label>
                </div>
                <div className="flex items-center gap-[16px] mt-[32px]">
                  <div className="flex items-center w-[123px] h-[64px] gap-[35px]  px-[12px] text[16px] font-poppins font-medium border border-[#9F9F9F] rounded-[10px]">
                    <button 
                      onClick={()=>
                        Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1)
                      }
                    >-</button>
                    <p>{Quantity}</p>
                    <button
                      onClick={()=>
                        setQuantity(Quantity + 1)
                      }
                    >+</button>
                  </div>
                  <button className='w-[220px] h-[64px] text-[20px] font-poppins font-normal  px-[48px] rounded-[15px] border border-[#000]'>Add To Cart</button>
                </div>
                <div className="mt-[60px] border-t border-[#D9D9D9] pt-[41px] pb-[67px] flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[20px] text-[16px] font-poppins font-normal text-[#9F9F9F]">
                    <h2>SKU</h2>
                    <p className='pl-[45px]'>:</p>
                    <p>SS001</p>
                  </div>
                  <div className="flex items-center gap-[20px] text-[16px] font-poppins font-normal text-[#9F9F9F]">
                    <h2>Category</h2>
                    <p>:</p>
                    <p>Sofas</p>
                  </div>
                  <div className="flex items-center gap-[20px] text-[16px] font-poppins font-normal text-[#9F9F9F]">
                    <h2>Tags</h2>
                    <p className='pl-[37px]'>:</p>
                    <p>Sofa, Chair, Home, Shop</p>
                  </div>
                  <div className="flex items-center gap-[20px] text-[16px] font-poppins font-normal text-[#9F9F9F]">
                    <h2>Share</h2>
                    <p className='pl-[30px]'>:</p>
                    <div className="flex items-center gap-[20px] text-[#000]">
                      <FaFacebook className='w-[20px] h-[20px]'/>
                      <FaLinkedin className='w-[20px] h-[20px]'/>
                      <AiFillTwitterCircle className='w-[20px] h-[20px]'/>
                    </div>
                  </div>
                </div>
            </div>
        </div>    
    </div> 
    </>
  )
}

export default Details
