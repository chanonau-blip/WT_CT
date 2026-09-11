import React from 'react'
import ProductCard from '../components/ProductCard'

function Product() {
  const products = [
    {
      id: 1,
      name: 'Xiaomi 16S',
      price: '9000',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'iPhone 17 Pro',
      price: '45000',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'Samsung S26',
      price: '50000',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      name: 'Vivo Y50',
      price: '15000',
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      name: 'Oppo V60',
      price: '17000',
      img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Product