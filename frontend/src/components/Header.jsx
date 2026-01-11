import React from 'react'
import { APP_NAME } from '../config/appConfig'
import { useTranslation } from 'react-i18next'
import { Menu } from 'lucide-react'



const Header = () => {

  const { t } = useTranslation();

  return (
    <div>
        <header className="bg-white shadow flex items-center p-6 dark:bg-gray-900 justify-between">
            <h1 className="text-2xl font-semibold dark:text-white">{t('appName')}</h1>
            <Menu className='md:hidden'/>
        </header>
    </div>
  )
}

export default Header