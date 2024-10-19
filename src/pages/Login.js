import React from 'react';
import { Link } from 'react-router-dom';
import A from "../images/A.png";

function Login() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-400 to-white dark:from-gray-800 dark:to-gray-900"
      style={{
        backgroundImage: `url(${A})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex gap-96 text-2xl font-bold dark:text-white">
        <Link to="/adminlogin">
          <button className=" bg-orange-300  dark:bg-gray-800 shadow-lg rounded-lg p-4">
            Admin Login
          </button>
        </Link>
        <Link to="/userlogin">
          <button className=" bg-orange-300 dark:bg-gray-800 shadow-lg rounded-lg p-4">
            User Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
