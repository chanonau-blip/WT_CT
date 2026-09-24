import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Signin from "./Signin";

function Contact() {
    const { user } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="bg-white border border-blue-400 rounded-xl p-6 shadow-md max-w-md w-full">
                <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">หน้าติดต่อเรา (Contact)</h2>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-blue-500">ข้อมูลผู้ใช้งานจาก AuthContext:</p>
                    <p><span className="font-medium">Email:</span>{user.email}</p>
                    <p><span className="font-medium">Password:</span>{user.password}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;