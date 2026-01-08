import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import usePageTitle from '../config/usePageTitle'


const Projects = () => {

    usePageTitle('Projects | Servant')

    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState([])


    useEffect(() => {
      const localProjects = JSON.parse(localStorage.getItem('projects') || '[]')

      localProjects.map((project) => {
        project.services = project.services.length
      })

      setProjects(localProjects)

    }, [])
    

    const [filters, setFilters] = useState({
        title: '',
        services: '',
        members: ''
    })

    const handleFilterChange = (e) => {
        const { name, value } = e.target
        setFilters(prev =>  ({
            ...prev,
            [name]: value
        }))
    }

    const filteredProjects = useMemo(() => {
    return projects.filter(project => {
        const matchesTitle =
        filters.title === '' ||
        project.title.toLowerCase().includes(filters.title.toLowerCase())

        const matchesServices =
        filters.services === '' ||
        project.services === Number(filters.services)

        const matchesMembers =
        filters.members === '' ||
        project.members === Number(filters.members)

        return matchesTitle && matchesServices && matchesMembers
    })
    }, [projects, filters])

    

    const handleDelete = (projectId) => {

        Swal.fire({
            title: t("warning"),
            text: t("deleteProjectText"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: t("deleteConfirmButton"),
            cancelButtonText: t("cancelButton")
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with deletion logic here
                console.log(`Project with ID ${projectId} deleted.`);

                const localProjects = JSON.parse(localStorage.getItem('projects') || [])

                const updatedProjects = localProjects.filter(project => project.id !== projectId)

                localStorage.setItem('projects', JSON.stringify(updatedProjects))

                Swal.fire({
                    title: t("deleted"),
                    text: t("projectDeleted"),
                    confirmButtonText: t('okButton'),
                    icon: "success"
                });
                setProjects(updatedProjects)
            }
        })
    }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">

            {/* Title */}
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold dark:text-white'>{t('projects')}</h1>
                <Link to="/projects/add">
                    <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>{t('addNewProject')}</button>
                </Link>
            </div>

            {/* Body */}
            <div className='space-y-6'>
                <div className="bg-white rounded shadow p-4 dark:bg-gray-800">
                    <h2 className='text-lg font-semibold dark:text-white'>{t('filter')}</h2>

                    {/* Filter Projects */}
                    <form action="#" className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                        <input
                            className='border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white'
                            type="text"
                            name="title"
                            id="title"
                            value={filters.title}
                            onChange={handleFilterChange}
                            placeholder={t('projectTitle')}/>
                        <input
                            className='border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white'
                            type="number"
                            name="services"
                            id="services"
                            value={filters.services}
                            onChange={handleFilterChange}
                            placeholder={t('numberOfServices')}/>
                        <input
                            className='border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white'
                            type="number"
                            name="members"
                            id="members"
                            value={filters.members}
                            onChange={handleFilterChange}
                            placeholder={t('numberOfTeamMembers')}/>
                    </form>
                </div>

                {/* Projects Table */}
                <table className='w-full bg-white rounded shadow overflow-hidden dark:bg-gray-800'>
                    <thead className={`bg-gray-100 text-left dark:bg-gray-800 ${i18n.language === "ar" ? "text-right" : "text-left"}`}>
                        <tr>
                            <th className='p-3 dark:text-white'>{t('id')}</th>
                            <th className='p-3 dark:text-white'>{t('title')}</th>
                            <th className='p-3 dark:text-white'>{t('services')}</th>
                            <th className='p-3 dark:text-white'>{t('teamMembers')}</th>
                            <th className='p-3 dark:text-white'>{t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProjects.map((project, index) => (
                            <tr key={project.id} className='border-t hover:bg-gray-50 dark:hover:bg-gray-700'>
                                <td className='p-3 dark:text-white'>{index + 1}</td>
                                <td className='p-3 font-medium dark:text-white'>
                                    <Link to={`/project/description/${project.id}`} className='hover:underline'>
                                        {project.title}
                                    </Link>
                                </td>
                                <td className='p-3 dark:text-white'>{project.services}</td>
                                <td className='p-3 dark:text-white'>{project.members}</td>
                                <td className='p-3 space-x-3'>
                                    <Link to={`/project/edit/${project.id}`}>
                                        <button className="text-blue-500 hover:underline hover:cursor-pointer">{t('edit')}</button>
                                    </Link>
                                    <button className="text-red-500 hover:underline hover:cursor-pointer" onClick={() => handleDelete(project.id)}>{t('delete')}</button>
                                </td>
                            </tr>
                        ))}

                        {filteredProjects.length === 0 && (
                            <tr>
                                <td colSpan={5} className='text-center p-4 text-gray-500 dark:text-gray-200'>
                                    {t('noProjectsFound')}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Projects