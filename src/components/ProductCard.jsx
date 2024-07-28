import React from 'react'

function ProductCard() {
  return (
    <div className='flex justify-center'>
        <div className="w-full shadow-xl card bg-base-100">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <p className="card-title">
                    Shoes!
                    <div className="badge badge-info">NEW</div>
                </p>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                {/* <div className="justify-end card-actions">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ProductCard