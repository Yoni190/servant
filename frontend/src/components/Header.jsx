import React from 'react'
import { APP_NAME } from '../config/appConfig'


const Header = () => {
  return (
    <div>
        <header className="bg-white shadow flex items-center p-6">
            <h1 className="text-2xl font-semibold">{APP_NAME}</h1>
        </header>
    </div>
  )
}

export default Header