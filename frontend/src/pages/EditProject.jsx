import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProjectForm from '../components/ProjectForm'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import usePageTitle from '../config/usePageTitle'





const EditProject = () => {

    usePageTitle('Edit Project | Servant')

    const { id } = useParams()

    const [project, setProject] = useState(null)
    const [links, setLinks] = useState(null)

    useEffect(() => {
      const localProjects = JSON.parse(localStorage.getItem('projects') || '[]')

      const localProject = localProjects.find(project => project.id == Number(id))

      const localProjectIndex = localProjects.findIndex(project => project.id == Number(id))


      const localLinks = JSON.parse(localStorage.getItem('serviceData'))

      const links = localLinks.find(link => link.projectIndex == Number(localProjectIndex))


      console.log(localLinks)

      setProject(localProject)
      setLinks(links)
    }, [])

    

    const services_data = ["Service A", "Service B", "Service C"]

    const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">
            <h1 className='text-2xl font-semibold dark:text-white'>{t('editProject')}</h1>
            {project ? (
            <ProjectForm 
                title_pass={project.title}
                description_pass={project.description}
                services_pass={project.services}
                members_pass={project.members}
                id_pass={project.id}
                service_urls={links}
            />
            ) : (
              <p>Loading Project...</p>
            )}
        </main>
     </div>
    </div>
  )
}

export default EditProject