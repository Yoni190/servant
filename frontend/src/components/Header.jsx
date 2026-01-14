import React, { useState } from 'react'
import { APP_NAME } from '../config/appConfig'
import { useTranslation } from 'react-i18next'
import { FolderKanban, Home, LogOut, Logs, Menu, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'




const Header = () => {

  const { t } = useTranslation();
  const [menuShown, setMenuShown] = useState(false)

  return (
    <div>
        <header className={`bg-white ${menuShown ? '' : 'shadow'} flex items-center p-6 dark:bg-gray-900 justify-between`}>
          <Link to={'/home'} className='flex gap-5 items-center'>
            <img src="/src/assets/servant_logo.png" alt="App logo" width="50" />
            <h1 className="text-2xl font-semibold dark:text-white">{t('appName')}</h1>
          </Link>
            <Menu
              className='md:hidden dark:text-white'
              onClick={() => setMenuShown(!menuShown)}
              />
        </header>
        <div className={`flex justify-center ${menuShown ? 'block' : 'hidden'} shadow p-4 bg-white dark:bg-gray-900`}>
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

              {/* <li className="mb-2">
                <Link to="/logs" className="text-gray-700 flex gap-2 dark:text-gray-300">
                  <Logs />
                  {t('logs')}
                </Link>
              </li> */}

              <li className="mb-2">
                <Link to="/settings" className="text-gray-700 flex gap-2 dark:text-gray-300">
                  <Settings />
                  {t('settings')}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 flex gap-2 dark:text-gray-300">
                  <LogOut />
                  {t('logout')}
                </Link>
                
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Header