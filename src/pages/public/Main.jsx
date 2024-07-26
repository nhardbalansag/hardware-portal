import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      <h1>MAIN</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Main