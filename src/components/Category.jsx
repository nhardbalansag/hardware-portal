import React from 'react'

import { Link } from 'react-router-dom'

function Category({route = '/products', sub='title here', title='Title', image = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}) {
  return (
    <div 
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
      }}
      className="m-5 shadow-xl card bg-base-100 image-full w-96">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{sub}</p>
            <div className="justify-end card-actions">
              <Link to={route}>
                <button className="btn btn-primary">See More</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Category