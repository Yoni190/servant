import React from 'react'
import { FolderKanban, Home, LogOut, Logs, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Sidebar = () => {

  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 w-64 p-4 dark:bg-gray-800">
      <ul className='flex flex-col gap-5'>
        <li className="mb-2">
          <Link to="/home" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <Home />
            {t('home')}
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/projects" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <FolderKanban />
            {t('projects')}
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/logs" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <Logs />
            {t('logs')}
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="text-gray-700 flex gap-2 dark:text-gray-300">
            <Settings />
            {t('settings')}
          </Link>
        </li>
        <li className="mb-2 flex gap-2 items-center text-gray-700 dark:text-gray-300">
          <LogOut />
          <a href="#">{t('logout')}</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar