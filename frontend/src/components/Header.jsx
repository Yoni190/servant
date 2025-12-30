import React from 'react'
import { APP_NAME } from '../config/appConfig'
import { useTranslation } from 'react-i18next'


const Header = () => {

  const { t } = useTranslation();

  return (
    <div>
        <header className="bg-white shadow flex items-center p-6 dark:bg-gray-900">
            <h1 className="text-2xl font-semibold dark:text-white">{t('appName')}</h1>
        </header>
    </div>
  )
}

export default Header