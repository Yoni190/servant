import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import usePageTitle from '../config/usePageTitle'



const Logs = () => {

    usePageTitle('Logs | Servant')

    const { t, i18n } = useTranslation();

    const logs = [
        {id: 1, action: t("addServices"), performed: "John", project: t("alpha"), time: "4:00pm"},
        {id: 2, action: t("editServices"), performed: "Jonathan", project: t("beta"), time: "7:00pm"},
        {id: 3, action: t("addMember"), performed: "Tom", project: t("gamma"), time: "10:00pm"}
    ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">

            {/* Title */}
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold dark:text-white'>{t('auditLogs')}</h1>
            </div>

            {/* Body */}
            <div className='space-y-6'>
                <div className="bg-white rounded shadow p-4 dark:bg-gray-800">
                    <h2 className='text-lg font-semibold dark:text-white'>{t('filter')}</h2>
                    <form action="#" className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                        <select
                            name="project"
                            id="project"
                            className="
                                border rounded p-2
                                bg-white text-gray-900
                                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                            >
                            <option value="">{t('selectProject')}</option>
                            <option value="alpha">{t('alpha')}</option>
                            <option value="beta">{t('beta')}</option>
                            <option value="gamma">{t('gamma')}</option>
                        </select>
                        <input
                            type="time" 
                            name="time" 
                            id="time" 
                            className='border rounded-xl p-4 dark:text-white'
                            />
                        <button
                            type="submit"
                            className='bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 w-32'>
                            {t('applyFilters')}
                        </button>
                    </form>
                </div>
                <table className='w-full bg-white rounded shadow overflow-hidden dark:bg-gray-800'>
                    <thead className={`bg-gray-100 text-left dark:bg-gray-800 ${i18n.language === "ar" ? "text-right" : "text-left"}`}>
                        <tr>
                            <th className='p-3 dark:text-white'>{t('id')}</th>
                            <th className='p-3 dark:text-white'>{t('action')}</th>
                            <th className='p-3 dark:text-white'>{t('performedBy')}</th>
                            <th className='p-3 dark:text-white'>{t('project')}</th>
                            <th className='p-3 dark:text-white'>{t('time')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} className='border-t hover:bg-gray-50 dark:hover:bg-gray-700'>
                                <td className='p-3 dark:text-white'>{log.id}</td>
                                <td className='p-3 font-medium dark:text-white'>{log.action}</td>
                                <td className='p-3 dark:text-white'>{log.performed}</td>
                                <td className='p-3 dark:text-white'>{log.project}</td>
                                <td className='p-3 dark:text-white'>{log.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Logs