import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-400 to-white dark:from-gray-800 dark:to-gray-900">
    <div className='flex gap-9 text-2xl font-bold'>
        <Link to="/adminlogin"><button className='rounded-lgw-full  w-44 space-y-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
        Admin Login
        </button></Link>
       <Link to="/userlogin"> <button className='rounded-lgw-full  w-44 space-y-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
            User Login
        </button></Link>
    </div>
    </div>
  )
}

export default Login