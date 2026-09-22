import React, { useState } from 'react'
import CategoryCard from '../components/CategoryCard'

function Category() {
  // 1. กำหนดค่าเริ่มต้นเป็น Array ว่าง เพื่อไม่ให้มีการ์ดขึ้นมาแต่แรก
  const [categories, setCategories] = useState([])

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    desc: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) return // ป้องกันการกดบันทึกค่าว่าง

    // 2. เมื่อกดบันทึก นำข้อมูลใหม่ไปต่อท้าย Array เพื่อให้การ์ดเด้งขึ้นมา
    setCategories([
      ...categories,
      {
        id: formData.id || categories.length + 1,
        name: formData.name,
        desc: formData.desc,
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80',
      },
    ])

    // เคลียร์ฟอร์มให้ว่างหลังกดบันทึก
    setFormData({ id: '', name: '', desc: '' })
  }

  return (
    <div className="flex flex-col items-center py-8 px-4">
      {/* ฟอร์มบันทึกหมวดสินค้า */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border border-blue-400 rounded-lg p-6 flex flex-col gap-4 shadow-sm bg-white mb-8"
      >
        <h2 className="text-center text-blue-500 font-bold text-lg">บันทึกหมวดสินค้า</h2>

        <div>
          <label className="text-xs text-blue-500 block mb-1">รหัสหมวดสินค้า</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-blue-500 block mb-1">ชื่อหมวดสินค้า</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-blue-500 block mb-1">คำอธิบายหมวดสินค้า</label>
          <textarea
            rows="3"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-blue-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded text-sm transition"
        >
          บันทึกข้อมูล
        </button>
      </form>

      {/* การ์ดจะแสดงเฉพาะเมื่อมีข้อมูลใน categories แล้วเท่านั้น */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((cat, index) => (
          <CategoryCard key={index} name={cat.name} image={cat.img} />
        ))}
      </div>
    </div>
  )
}

export default Category