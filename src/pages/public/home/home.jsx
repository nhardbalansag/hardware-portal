import React from 'react'

import Category from '../../../components/Category'

function Home() {
  return (
    <div>
      <div className="relative px-6 isolate lg:px-8">
        <div className="max-w-2xl py-32 mx-auto sm:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Lorem ipsum dolor sit amet, consectetur .</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem ipsum </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="mx-auto max-w-2xl mt-3 lg:max-w-4xl justify-center flex flex-wrap">
        <Category/>
        <Category/>
        <Category/>
        <Category/>
      </div>
    </div>
  )
}

export default Home