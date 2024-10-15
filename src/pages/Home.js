import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaImage, FaGraduationCap, FaPlane, FaPencilAlt } from "react-icons/fa"; // Import icons
import logo from "../images/logo.jpg";
import { FcDocument } from "react-icons/fc";
import { LiaToolsSolid } from "react-icons/lia";
import { IoTimerOutline } from "react-icons/io5";
import { TiExport } from "react-icons/ti";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <img src={logo} width={200} height={200} className='mb-10' />
            <div className="relative flex text-3xl font-serif text-gray-900 dark:text-white">
                <h1 className="overflow-hidden whitespace-nowrap border-r-4 border-white pr-2 animate-typing">
                    Hi there! Let's get started!
                </h1>
                <span className="inline-block w-1 h-10 bg-black animate-blink"></span> {/* Blinking cursor */}
            </div>

            {/* 4 Boxes Section */}
            <div className="flex flex-wrap gap-8 mt-6 justify-center">
                <Link className="flex flex-col items-center justify-center p-6 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-600 transition duration-300">
                    <FcDocument className="text-4xl text-blue-500" />
                    <h2 className="font text-gray-800 dark:text-gray-200">Quick Documentation Creation: Create comprehensive documentation in just minutes.</h2>
                </Link>

                <Link className="flex flex-col items-center justify-center p-6 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-600 transition duration-300">
                    <LiaToolsSolid className="text-4xl mb-3 text-yellow-500" />
                    <h2 className="font text-gray-800 dark:text-gray-200">Flexible Customization: Modify and personalize your documents effortlessly.</h2>
                </Link>

                <Link className="flex flex-col items-center justify-center p-6 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-600 transition duration-300">
                    <IoTimerOutline className="text-4xl mb-3 text-green-500" />
                    <h2 className="font text-gray-800 dark:text-gray-200">No Coding Required: Customize your templates without any coding skills.</h2>
                </Link>

                <Link className="flex flex-col items-center justify-center p-6 w-52 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-600 transition duration-300">
                    <TiExport className="text-4xl mb-2 text-purple-500" />
                    <h2 className="font text-gray-800 dark:text-gray-200">Versatile Export Options: Export your documents in multiple file formats with ease.</h2>
                </Link>
            </div>

            <div className="flex justify-center text-2xl m-4 mt-10 transition duration-300">
                <Link to="../template" className="relative group">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 p-2">
                        {/* Empty div for gradient background */}
                    </div>
                    {/* Icon overlaying the gradient */}
                    <FaArrowCircleRight
                        className="relative text-white text-5xl group-hover:scale-110 transition duration-300"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Home;
