import React from 'react'

function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md w-52 pb-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in zoom-in duration-500">
      <img src={image} alt={name} className="w-full h-44 object-cover mb-3" />
      <div className="px-4">
        <h3 className="text-purple-600 font-semibold text-sm">{name}</h3>
        <p className="text-purple-500 font-medium text-sm mt-0.5">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard