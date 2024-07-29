import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import NavigationBar from '../../components/NavigationBar'
import DrawerItemComp from '../../components/DrawerItemComp'
import Telephone from '../../assets/icons/telephone'
import Footer from '../../components/Footer'
import Messenger from '../../components/Messenger'

function Main() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='py-4 bg-stone-800 '>
        <div className='flex items-center justify-center'>
          <Telephone classname='w-4 h-4 mr-4 text-white'/>
          <p className='text-white'>02-123456-78</p>
        </div>
      </div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          {/* Navbar */}
          <div className="w-full bg-white navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <a className="text-xl btn btn-ghost">DCODE</a>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <DrawerItemComp route='/' itemTitle='Home'/>
                <DrawerItemComp route='/products' itemTitle='Products'/>
                <DrawerItemComp route='/about' itemTitle='About Us'/>
                <DrawerItemComp route='/contact-us' itemTitle='Contact Us'/>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className="px-4 py-4 bg-white">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="min-h-full p-4 menu bg-base-200 w-80">
            {/* Sidebar content here */}
            <DrawerItemComp route='/' itemTitle='Home'/>
            <DrawerItemComp route='/products' itemTitle='Products'/>
            <DrawerItemComp route='/about' itemTitle='About Us'/>
            <DrawerItemComp route='/contact-us' itemTitle='Contact Us'/>
          </ul>
        </div>
      </div>
      <Footer/>
      <Messenger/>
    </div>
  )
}

export default Main