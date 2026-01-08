import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'
import ProjectInfo from '../components/ProjectInfo'



const ProjectDescription = () => {

    const { id } = useParams()
    const [project, setProject] = useState()


    useEffect(() => {
      const localProject = JSON.parse(localStorage.getItem('projects')).find(project => project.id == Number(id))

      setProject(localProject)
    }, [])

    const downloadProjectInfo = () => {
        console.log('Downloading...')
    }
    

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold dark:text-white'>Project Description</h1>
                <button className='border rounded bg-blue-500 text-white p-2 hover:bg-blue-700 hover:cursor-pointer' onClick={downloadProjectInfo}>Download Project Info</button>
            </div>
            <ProjectInfo project={project} />
        </main>
      </div>
    </div>
  )
}

export default ProjectDescription