import React from 'react'

import Category from '../../../components/Category'

function ProductCategories() {
  return (
    <div>
      <div class="mx-auto max-w-2xl text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem ipsum </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="mx-auto max-w-2xl mt-3 lg:max-w-4xl justify-center flex flex-wrap">
        <Category route='all'/>
        <Category route='all'/>
        <Category route='all'/>
        <Category route='all'/>
      </div>
    </div>
  )
}

export default ProductCategories