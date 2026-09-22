import React from 'react'

function CategoryCard({ name, image }) {
  return (
    <div className="relative w-36 h-48 rounded-xl overflow-hidden shadow-md flex items-end justify-center p-3">
      <img
        src={image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300'}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="relative z-10 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-md shadow">
        {name}
      </span>
    </div>
  )
}

export default CategoryCard