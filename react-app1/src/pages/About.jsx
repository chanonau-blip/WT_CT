import React from "react";
import { FaFacebookMessenger, FaYoutube, FaLine, FaInstagram, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

function About(){
    return (
        <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">หน้าเกี่ยวกับ เทคโนโลยีคอมพิวเตอร์</h2>
        <div className="flex items-center gap-6">
            <FaFacebookMessenger size={42} className="text-blue-600 cursor-pointer hover:scale-110 transition-transform"/>
            <FaYoutube size={42} className="text-red-600 cursor-pointer hover:scale-110 transition-transform"/>
            <FaLine size={42} className="text-green-500 cursor-pointer hover:scale-110 transition-transform"/>
            <FaInstagram size={42} className="text-pink-600 cursor-pointer hover:scale-110 transition-transform"/>
            <FaLinkedin size={42} className="text-blue-700 cursor-pointer hover:scale-110 transition-transform"/>
        </div>
        </div>
    )
}

export default About;