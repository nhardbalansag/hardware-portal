import React from 'react'

function Category() {
  return (
    <div className="m-5 shadow-xl card bg-base-100 image-full w-96">
        <figure>
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="justify-end card-actions">
                <button className="btn btn-primary">See More</button>
            </div>
        </div>
    </div>
  )
}

export default Category