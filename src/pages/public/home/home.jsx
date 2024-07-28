import React from 'react'

import Category from '../../../components/Category'

import IconArrowDownUp from '../../../assets/icons/IconArrowDownUp'

import test from '../../../../src/assets/img/fotis-nakos-lu0H9DVMBLE-unsplash.jpg'
import test2 from '../../../../src/assets/img/benjamin-lehman-EJU7A__krX0-unsplash.jpg'
import test3 from '../../../../src/assets/img/sven-brandsma-kerFMg52cUA-unsplash.jpg'
import test4 from '../../../../src/assets/img/greyson-joralemon-A1g0oeX29ec-unsplash.jpg'


import HomeDisplayImage from '../../../../src/assets/img/julie-molliver-BYTMWQfQU4Y-unsplash.jpg'

function Home() {
  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${HomeDisplayImage})`,
          backgroundSize:'100%',
          backgroundRepeat:'no-repeat',
        }}
        className="relative flex justify-center isolate">
        <div className="max-w-2xl py-32 sm:py-48 ">
          <div className="text-center md:mt-24" >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Lorem ipsum dolor sit amet, consectetur .</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="divider ">
        <IconArrowDownUp/>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem ipsum </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="mx-auto max-w-2xl mt-3 lg:max-w-4xl justify-center flex flex-wrap">
        <Category image={test}/>
        <Category image={test3}/>
        <Category image={test2}/>
        <Category image={test4}/>
      </div>
    </div>
  )
}

export default Home