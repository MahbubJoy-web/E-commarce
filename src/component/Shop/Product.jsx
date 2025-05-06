import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductItems from '../ProductItems';
import './Produxt.css';

// ==========Items==========//
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,];

const Product = ({itemsPerPage}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
    
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <div className="ProductItems pt-[46px] pb-[86px] panigation">
        <div className="container flex flex-col items-center">
            <div className="w-[1236px] grid grid-cols-4 gap-[30px]">
                {currentItems &&
                currentItems.map((item , i) => (
                    <ProductItems key={item.key} />

                ))}
            </div>
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
        </div>
    </div>
  </>
  )
}

export default Product
