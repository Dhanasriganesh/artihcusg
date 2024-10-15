import React, { useState } from 'react';
import { Link }from "react-router-dom";
function Login() {
  const [isRegister, setIsRegister] = useState(false); // State to toggle between login and register

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 to-slate-400 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {isRegister ? 'Create an Account' : 'Welcome Back!'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {isRegister
              ? 'Already have an account?'
              : "Don't have an account yet?"}
            <button
              onClick={toggleForm}
              className="ml-1 text-blue-500 hover:underline dark:text-blue-400"
            >
              {isRegister ? 'Log in here' : 'Register here'}
            </button>
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          {isRegister && (
            <div className="relative">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                placeholder="Username"
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
              placeholder="Email address"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
              placeholder="Password"
            />
          </div>

          {isRegister && (
            <div className="relative">
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm"
                placeholder="Confirm Password"
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

        {/* Divider for social logins */}
        {!isRegister && (
          <div className="flex items-center justify-center mt-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        )}

        {/* Social Login */}
        {!isRegister && (
          <div className="flex gap-3 mt-4">
            <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <span className="sr-only">Sign in with Google</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 4.5c1.2 0 2 .4 2.6 1l2-2a7.97 7.97 0 00-4.6-1.6A8 8 0 002 10a8 8 0 0015 1.2 7.9 7.9 0 00-.2-2.1H10v2h6.3a6 6 0 11-6.3-7.5z" />
            </svg>
          </button>
            {/* Add more buttons for other social logins */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
