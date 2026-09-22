import React from 'react'

function ProductCard({ image, name, price, rating }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-sm p-4 w-44 hover:shadow-md transition">
      <div className="w-28 h-28 flex items-center justify-center mb-3">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="w-full text-center">
        <h3 className="text-blue-500 font-medium text-xs truncate" title={name}>
          {name}
        </h3>
        <p className="text-purple-600 text-xs font-semibold mt-1">{price}</p>
        {rating && <p className="text-purple-500 text-xs mt-0.5">{rating}</p>}
      </div>
    </div>
  )
}

export default ProductCard