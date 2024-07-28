import React from 'react'

import Category from '../../../components/Category'

import IconArrowDownUp from '../../../assets/icons/IconArrowDownUp'

import test from '../../../../src/assets/img/christopher-burns-Wiu3w-99tNg-unsplash.jpg'
import test2 from '../../../../src/assets/img/benjamin-lehman-EJU7A__krX0-unsplash.jpg'
import test3 from '../../../../src/assets/img/sven-brandsma-kerFMg52cUA-unsplash.jpg'
import test4 from '../../../../src/assets/img/greyson-joralemon-A1g0oeX29ec-unsplash.jpg'
import test5 from '../../../../src/assets/img/jakub-zerdzicki-HXpG1S-INN8-unsplash.jpg'



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
            <p className="mt-6 text-lg leading-8 text-gray-600">Empowering Your Build with Quality Hardware</p>
          </div>
        </div>
      </div>
      <div className="divider ">
        <IconArrowDownUp/>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Products and Services </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Discover Our Exclusive Collections and Expert Services</p>
      </div>
      <div class="mx-auto max-w-2xl mt-3 lg:max-w-4xl justify-center flex flex-wrap">
        <Category sub='Top-quality welding products for strong, precise fabrication and repairs' title='Welding' image={test}/>
        <Category sub='Premium painting supplies with a vibrant color palette for a flawless finish.' title='Painting' image={test3}/>
        <Category sub='Durable and precise tools for tackling any project with ease.' title='Tools' image={test2}/>
        <Category sub='Quality woodwork products for crafting elegant furniture and unique decor.' title='Wood Works' image={test4}/>
        <Category sub='Reliable electrical products for safe and efficient installations and repairs.' title='Electrical' image={test5}/>
      </div>
    </div>
  )
}

export default Home