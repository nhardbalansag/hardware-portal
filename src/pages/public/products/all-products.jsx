import React from 'react'

import ProductCard from '../../../components/ProductCard'

function AllProducts() {
  return (
    <div className='grid grid-cols-2 gap-3 md:gap-4 place-content-center md:grid-cols-3'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default AllProducts