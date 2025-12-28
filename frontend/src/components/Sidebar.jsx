import React from 'react'
import { FolderKanban, Home, LogOut, Logs, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4">
      <ul className='flex flex-col gap-5'>
        <li className="mb-2 flex gap-2">
          <Home className='text-gray-700'/>
          <Link to="/home" className="text-gray-700">Home</Link>
        </li>
        <li className="mb-2 flex gap-2">
          <FolderKanban className='text-gray-700'/>
          <Link to="/projects" className="text-gray-700">Projects</Link>
        </li>
        <li className="mb-2 flex gap-2">
          <Logs className='text-gray-700'/>
          <a href="#" className="text-gray-700">Logs</a>
        </li>
        <li className="mb-2 flex gap-2">
          <Settings className='text-gray-700'/>
          <a href="#" className="text-gray-700">Settings</a>
        </li>
        <li className="mb-2 flex gap-2">
          <LogOut className='text-gray-700'/>
          <a href="#" className="text-gray-700">Log Out</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar