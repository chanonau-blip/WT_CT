import React, { useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

function Signin(){
    const {user, setUser} = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }, []);

    const handleSignIn = (e) => {
        e.preventDefault();
        const inputEmail = emailRef.current.value;
        const inputPassword = passwordRef.current.value;

        if (!inputEmail || !inputPassword) return;

        setUser({
            email: inputEmail,
            password: inputPassword,
        });

        emailRef.current.value='';
        passwordRef.current.value='';
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4">
            <form onSubmit={handleSignIn} className="w-full max-w-sm border border-blue-400 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4 mb-6">
                <h2 className="text-center text-blue-600 font-bold text-lg">เข้าสุ่ระบบ (Sign in)</h2>
                <div>
                    <label className="text-xs text-blue-600 block mb-1">Email</label>
                    <input ref={emailRef} type="email" placeholder="กรอกอีเมลของคุณ" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-blue-500" required/>
                </div>

                <div>
                    <label className="text-xs text-blue-600 block mb-1">Password</label>
                    <input ref={passwordRef} type="password" placeholder="กรอกรหัสผ่านของคุณ" className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-blue-500" required/>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded text-sm transition">
                    เข้าสู่ระบบ
                </button>
            </form>
            <div className="w-full max-w-sm bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-gray-700">
                <p><span className="font-medium">Email:</span>{user.email}</p>
                <p><span className="font-medium">Password</span>{user.password}</p>
            </div>
        </div>
    );
}

export default Signin;