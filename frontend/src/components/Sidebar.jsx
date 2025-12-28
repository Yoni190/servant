import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4 min-h-screen">
      <ul className='flex flex-col gap-5'>
        <li className="mb-2">
          <a href="#" className="text-gray-700">Projects</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700">Settings</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700">Log Out</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar