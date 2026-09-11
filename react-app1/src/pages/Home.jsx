import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 py-12 px-4 my-6 rounded-lg max-w-5xl mx-auto shadow-sm">

      <h1 className="text-5xl font-bold text-blue-500 mb-6">Home</h1>

      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&auto=format&fit=crop&q=80"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>


      <Link
        to="/order"
        className="text-blue-500 font-semibold mb-4 hover:underline text-lg"
      >
        ไปหน้าสั่งซื้อ
      </Link>

     
      <Link
        to="/cart"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg shadow transition duration-200"
      >
        ไปหน้าตะกร้าสินค้า
      </Link>
    </div>
  )
}

export default Home