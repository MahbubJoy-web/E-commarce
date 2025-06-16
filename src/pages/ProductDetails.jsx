import React from 'react';
import BreadCrumb from "../Component/BreadCrumb";
import Details from '../component/Details';
import RelatedProduct from '../component/RelatedProduct';

const ProductDetails = () => {
  return (
    <>
     <div className="bg-[#F9F1E7] py-[37px]">
        <div className="container flex pl-[200px]">
        <BreadCrumb />
        </div>
    </div>
    <div className="mt-8">
        <div className="container">
          <div className="">
            <Details/>
            <RelatedProduct/>
          </div>
        </div>
    </div> 
    </>
  )
}

export default ProductDetails
