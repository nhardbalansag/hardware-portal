import React from 'react'

import { Outlet, Link } from 'react-router-dom'

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Products