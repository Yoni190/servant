import React from 'react'
import { FolderKanban, Home, LogOut, Logs, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4 dark:bg-gray-800">
      <ul className='flex flex-col gap-5'>
        <li className="mb-2">
          <Link to="/home" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <Home />
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/projects" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <FolderKanban />
            Projects
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/logs" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <Logs />
            Logs
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <Settings />
            Settings
          </Link>
        </li>
        <li className="mb-2 flex gap-2 items-center text-gray-700 dark:text-gray-300">
          <LogOut />
          <a href="#">Log Out</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar