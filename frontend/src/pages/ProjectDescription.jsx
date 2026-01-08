import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'


const ProjectDescription = () => {

    const { id } = useParams()
    const [project, setProject] = useState()


    useEffect(() => {
      const localProject = JSON.parse(localStorage.getItem('projects')).find(project => project.id == Number(id))

      setProject(localProject)
    }, [])
    

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">
            <h1 className='text-2xl font-semibold dark:text-white'>Project Description</h1>

            {/* Project Information */}
            <h2>Project Title</h2>
            <p>{project.title}</p>
        </main>
      </div>
    </div>
  )
}

export default ProjectDescription