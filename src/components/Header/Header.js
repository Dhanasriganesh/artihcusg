import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.jpg";
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for dark/light mode
import logoor from "../../images/logoor.png";
function Header() {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Check user's system preference for dark mode and set initial state
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <div className=' '>
            <div className="flex justify-between mt-3 mb-3 mr-10 dark:bg-gray-900'">
                <Link to="/home">
                    <img src={logo} alt="logo" width={200} height={100} /></Link>


                <button onClick={toggleDarkMode} className="flex text-2xl p-2 focus:outline-none justify-end">
                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
                </button>

                {/* <h1 className='flex text-3xl font-serif'>Artihcus Global</h1> */}
                {/* <hr className="border-gray-300 my-2" /> */}
            </div>

            <hr className="absolute inset-0 h-1 bg-gray-50 shadow-black shadow-lg" />


        </div>
    );
}

export default Header;
