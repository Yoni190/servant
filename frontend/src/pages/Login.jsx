import React from 'react'

const Login = () => {
  return (
    <div>
       <form action="#" className="w-3/4 max-w-sm mt-4 flex flex-col mx-auto">
            <h1 className='text-2xl font-bold text-center'>Login</h1>
           <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-2" />
           <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-2" />
           <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
       </form>
    </div>
  )
}

export default Login