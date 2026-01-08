import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


const ProjectDescription = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">
            <h1 className='text-2xl font-semibold dark:text-white'>Project Description</h1>
        </main>
      </div>
    </div>
  )
}

export default ProjectDescription