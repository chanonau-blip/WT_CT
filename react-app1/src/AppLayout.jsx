import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function AppLayout(){
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar/>
            <main className='grow'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout
