import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false); // State to toggle between login and register
  const [projectType, setProjectType] = useState('');

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-400 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="w-full  max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isRegister ? 'Create an Account' : 'User Logon!'}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {isRegister
                ? 'Already have an account?'
                : "Don't have an account yet?"}
              <button
                onClick={toggleForm}
                className="ml-1 text-blue-500 hover:underline dark:text-blue-400"
              >
                {isRegister ? 'Login' : 'Account creation'}
              </button>
            </p>
          </div>
          {/* Form Fields */}
          <form className="space-y-6">
            {isRegister && (
              <div className="relative">
                <label htmlFor="First Name" className="sr-only">
                  First Name
                </label>
                <input
                  id="First Name"
                  name="First Name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
            )}
            {isRegister && (
              <div className="relative">
                <label htmlFor="Last Name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="Last Name"
                  name="Last Name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
            )}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            {isRegister && (
              <div className="relative">
                <label htmlFor="Mobile Number" className="sr-only">
                  Mobile Number
                </label>
                <input
                  id="Mobile Number"
                  name="Mobile Number"
                  type="number"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                  placeholder="Mobile Number"
                />
              </div>
            )}
        
            {isRegister && (
              <div className="relative">
                {/* Dropdown for project type */}
                <label htmlFor="project-type" className="sr-only">
                  Select Project Type
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                >
                  <option value="" disabled selected>Select Project Type</option>
                  <option value="VMM">VMM</option>
                  <option value="Daikin">Daikin</option>
                  <option value="Symony">Symony</option>
                  <option value="Others">Others</option>
                </select>
                {projectType === "Others" && (
                  <div className="relative mt-3">
                    <label htmlFor="custom-project-name" className="sr-only">
                      Enter Project Name
                    </label>
                    <input
                      id="custom-project-name"
                      name="custom-project-name"
                      type="text"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                      placeholder="Enter Project Name"
                    />
                  </div>
                )}
              </div>
            )}
            {!isRegister && (
              <div className="relative">
                <label htmlFor="Password" className="sr-only">
                  Password
                </label>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            )}
            {!isRegister && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <button
                    className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>
            )}
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <Link to="/home">{isRegister ? 'Sign Up' : 'Sign In'}</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );
}

export default Login;
