import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return (
    <div className="flex justify-center py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl px-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.title}
            price={item.price}
            rating={item.rating}
            image={item.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default Product