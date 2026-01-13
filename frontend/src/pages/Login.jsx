import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import usePageTitle from '../config/usePageTitle'



const Login = () => {

  usePageTitle('Login | Servant')

  const { t, i18n } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">

       {/* Language Switch */}
        <div className={`absolute top-4 ${i18n.language === 'en' ? 'right-4' : 'left-4'} flex gap-2`}>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-3 py-1 rounded text-sm hover:cursor-pointer ${
              i18n.language === 'en'
                ? 'bg-blue-600 text-white hover:bg-blue-800'
                : 'bg-white border text-gray-700 hover:bg-gray-200'
            }`}
          >
            EN
          </button>

          <button
            onClick={() => i18n.changeLanguage('ar')}
            className={`px-3 py-1 rounded text-sm hover:cursor-pointer ${
              i18n.language === 'ar'
                ? 'bg-blue-600 text-white hover:bg-blue-800'
                : 'bg-white border text-gray-700 hover:bg-gray-200'
            }`}
          >
            AR
          </button>
        </div>

      <form className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-5">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            {t('welcomeBack')}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {t('signInSubtitle')}
          </p>
        </div>

        <input
          type="email"
          placeholder={t('email')}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <input
          type="password"
          placeholder={t('password')}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        <Link to="/home">
            <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
            >
            {t('login')}
            </button>
        </Link>

        <p className="text-center text-sm text-gray-600">
          {t('noAccount')}{' '}
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {t('register')}
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
