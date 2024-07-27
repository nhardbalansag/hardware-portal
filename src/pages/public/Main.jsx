import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import NavigationBar from '../../components/NavigationBar'
import DrawerItemComp from '../../components/DrawerItemComp'
import Telephone from '../../assets/icons/telephone'

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
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <NavigationBar logout={() => LogoutUser()}/>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            <DrawerItemComp route='/' itemTitle='Home'/>
            <DrawerItemComp route='/products' itemTitle='Products'/>
            <DrawerItemComp route='/about' itemTitle='About Us'/>
            <DrawerItemComp route='/contact-us' itemTitle='Contact Us'/>
          </ul>
        </div>
      </div>
      <div className="flex-grow bg-white">
        <Outlet />
      </div>
      <footer className="p-10 rounded footer footer-center bg-stone-800 text-base-content">
        <nav className="grid grid-flow-col gap-4">
          <a className="text-white link link-hover">About us</a>
          <a className="text-white link link-hover">Contact</a>
          <a className="text-white link link-hover">Products</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-white fill-current ">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-white fill-current ">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-white fill-current ">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className='text-white '>Copyright © {new Date().getFullYear()} - All right reserved by DCODE IT Solutions</p>
        </aside>
      </footer>
    </div>
  )
}

export default Main