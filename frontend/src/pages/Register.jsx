import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <form className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-5">

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Create account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Get started in just a few steps
          </p>
        </div>

        <input
          type="text"
          placeholder="Full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Register
