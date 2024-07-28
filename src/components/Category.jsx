import React from 'react'

import { Link } from 'react-router-dom'

function Category({route = '/products', image = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}) {
  return (
    <div 
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center'
    }}
    className="m-5 shadow-xl card bg-base-100 image-full w-96">
        {/* <figure>
            <img
                style={{ width: '100%', height: '100%' }}
                src={image}
                alt="Shoes" />
        </figure> */}
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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