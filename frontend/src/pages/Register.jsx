import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <form action="#" className="w-3/4 max-w-sm mt-4 flex flex-col mx-auto">
            <h1 className='text-2xl font-bold text-center'>Register</h1>
            <input type="text" placeholder="Full Name" className="border p-2 rounded w-full mb-2" />
            <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-2" />
            <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
            <p>Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
        </form>
    </div>
  )
}

export default Register