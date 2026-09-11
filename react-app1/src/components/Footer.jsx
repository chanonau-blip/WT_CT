import React from 'react';
import { FaFacebook, FaLinkedin,FaFacebookMessenger,FaTwitter, FaInstagram } from "react-icons/fa";

function Footer (){
    return (
        <footer className="flex flex-col items-center py-6 gap-4 border-t border-blue-800 mt-10">
            <div className="flex gsp-6 text-xs text-blue-600">
                <span>Home About Services Media Gallery Contact</span>
   
            </div>
            <div className="flex gap-4 text-blue-500 text-lg">
                <FaFacebook/>
                <FaLinkedin/>
                <FaInstagram/>
                <FaFacebookMessenger/>
                <FaTwitter/>
            </div>
            <div className="flex gap-4 text-blue-500 text-lg">© 2026 CT RMU shop Company Ltd. all rights reservered</div>
        </footer>
    )
}
export default Footer