import React from 'react'
import Commobanner from '../component/Commobanner'
import Filter from '../component/Shop/Filter'
import Product from '../component/Shop/Product'

const Shop = () => {
  return (
    <>
     <Commobanner/> 
     <Filter/>
     <Product itemsPerPage={16}/>
    </>
  )
}

export default Shop
