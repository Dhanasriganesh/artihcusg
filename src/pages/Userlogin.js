import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bg from "../images/bg.png";
import { FaAngleLeft } from "react-icons/fa";

function Login() {
  const [isRegister, setIsRegister] = useState(false); // State to toggle between login and register
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State for Forgot Password
  const [projectType, setProjectType] = useState('');
  const [contact, setContact] = useState(''); // State to handle contact input for Forgot Password

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };

  return (
    <div>
      <div className='ml-10'>
        <button className='text-2xl font-bold'>
          <Link to="/"><FaAngleLeft /></Link>
        </button>
      </div>
      <h1 className='flex justify-center font-bold'>User  !</h1>
      <div className="flex items-center justify-center min-h-screen gap-10 dark:from-gray-800 dark:to-gray-900">

        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg box-sh">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isForgotPassword
                ? 'Reset your password'
                : isRegister
                  ? 'Create an Account'
                  : 'Sign in to your account'}
            </h2>
            <h4 className='text-blue-800'>
              {isForgotPassword ? 'Enter your details to receive OTP' : 'Start your journey'}
            </h4>
          </div>
          
          {/* Form Fields */}
          <form className="space-y-6">
            {isForgotPassword ? (
              <div>
                <label htmlFor="contact" className="sr-only">
                  Mobile Number or Email
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                  placeholder="Enter Mobile Number or Email"
                />
                <div className="mt-4">
                 <Link to="/otpverification"> <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-300 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 dark:bg-orange-300 dark:hover:bg-orange-300"
                  >
                    Send OTP
                  </button></Link>
                </div>
                <p className="mt-2 ml-16 text-xs justify-center text-gray-600 dark:text-gray-400">
                  <button
                    onClick={handleBackToLogin}
                    className="text-xs text-orange-300 hover:underline dark:text-orange-300"
                  >
                    Back to Login
                  </button>
                </p>
              </div>
            ) : (
              <>
                {isRegister && (
                  <div className="flex gap-5">
                    <div className="relative">
                      <label htmlFor="First Name" className="sr-only">First Name</label>
                      <input
                        id="First Name"
                        name="First Name"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="Last Name" className="sr-only">Last Name</label>
                      <input
                        id="Last Name"
                        name="Last Name"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                )}

                <div className="relative">
                  <label htmlFor="email" className="sr-only">Email</label>
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
                    <label htmlFor="Mobile Number" className="sr-only">Mobile Number</label>
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
                    <label htmlFor="project-type" className="sr-only">Select Project Type</label>
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
                        <label htmlFor="custom-project-name" className="sr-only">Enter Project Name</label>
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
                    <label htmlFor="Password" className="sr-only">Password</label>
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
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <div className="text-sm">
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="font-medium text-orange-300 hover:underline dark:text-blue-400"
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
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-300 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 dark:bg-orange-300 dark:hover:bg-orange-300"
                  >
                    <Link to="/home">{isRegister ? 'Sign Up' : 'Sign In'}</Link>
                  </button>
                </div>
                <p className="mt-2 ml-16 text-xs justify-center text-gray-600 dark:text-gray-400">
                  {isRegister ? 'Already have an account?' : "Don't have an account yet?"}
                  <button
                    onClick={toggleForm}
                    className="text-xs text-orange-300 hover:underline dark:text-orange-300"
                  >
                    {isRegister ? 'Login' : 'Signup'}
                  </button>
                </p>
              </>
            )}
          </form>
        </div>

        <div>
          <img src={bg} width={593} height={346} alt="background" className="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
