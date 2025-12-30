import React from 'react'
import { APP_NAME } from '../config/appConfig'


const Header = () => {
  return (
    <div>
        <header className="bg-white shadow flex items-center p-6 dark:bg-black">
            <h1 className="text-2xl font-semibold dark:text-white">{APP_NAME}</h1>
        </header>
    </div>
  )
}

export default Header