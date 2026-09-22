import React from 'react';
import {Link} from 'react-router-dom'
import { FaApple,FaShoppingCart } from "react-icons/fa";

function Navbar(){
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        <Link to="/" className="text-3xl text-blue-500">
            <FaApple/>
        </Link>
        <div className="flex gap-6 text-sm font-semibold text-blue-500">
            <Link to="/" className="hover:text-blue-700">หน้าหลัก</Link>
            <Link to="/category" className="hover:text-blue-700">หมวดสินค้า</Link>
            <Link to="/product" className="hover:text-blue-700">สินค้า</Link>
            <Link to="/order" className="hover:text-blue-700">สั่งซื้อ</Link>
            <Link to="/contact" className="hover:text-blue-700">ติดต่อเรา</Link>
            <Link to="/about" className="hover:text-blue-700">เกี่ยวกับเรา</Link>
        </div>
        <div className="flex items-center gap-4">
            <Link to="/cart" className="text-blue-500 text-xl">
                <FaShoppingCart/>
            </Link>
            <Link to="/signup" className="text-xs px-3 py-1.5 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
            สมัครสมาชิก
            </Link>
            <Link to="/signin" className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            เข้าสู่ระบบ
            </Link>
        </div>
        </nav>
    )
}

export default Navbar