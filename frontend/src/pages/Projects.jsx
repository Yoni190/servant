import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import usePageTitle from '../config/usePageTitle'



const Projects = () => {

    usePageTitle('Projects | Servant')

    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
    const localProjects = JSON.parse(localStorage.getItem('projects') || '[]')

    const normalizedProjects = localProjects.map(project => ({
        ...project,
        servicesCount: Array.isArray(project.services)
        ? project.services.length
        : 0
    }))

    setProjects(normalizedProjects)
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
    if (!result.isConfirmed) return

    const localProjects = JSON.parse(
      localStorage.getItem('projects') || '[]'
    )

    const updatedProjects = localProjects.filter(
      project => String(project.id) !== String(projectId)
    )

    localStorage.setItem('projects', JSON.stringify(updatedProjects))
    setProjects(updatedProjects)

    Swal.fire({
      title: t("deleted"),
      text: t("projectDeleted"),
      confirmButtonText: t("okButton"),
      icon: "success"
    })
  })
}


    const handleProjectNavigation = async (id) => {
        const result = await Swal.fire({
            title: t("enterPasscode"),
            text: t("sensitiveData"),
            input: "password",
            inputPlaceholder: t("Passcode (12345678)"),
            showCancelButton: true,
            confirmButtonText: t("continue"),
            cancelButtonText: t("cancelButton"),
            preConfirm: (value) => {
                if(!value) {
                    Swal.showValidationMessage(t("passcodeRequired"))
                }
                return value
            }
        })

        if(!result.isConfirmed) return

        if (result.value !== "12345678") {
            Swal.fire({
                icon: "error",
                text: t("incorrectPassword")
            })
            return
        }

        navigate(`/project/info/${id}`)
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
                    <button className='bg-green-500 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-green-600'>{t('addNewProject')}</button>
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
                <div className="hidden md:block overflow-x-auto">
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
                                        <span
                                        className="cursor-pointer hover:underline"
                                        onClick={() => handleProjectNavigation(project?.id)}
                                        >
                                        {project?.title}
                                        </span>
                                    </td>
                                    <td className='p-3 dark:text-white'>{project?.servicesCount}</td>
                                    <td className='p-3 dark:text-white'>{project?.members}</td>
                                    <td className='p-3 space-x-3'>
                                        <Link to={`/project/edit/${project?.id}`}>
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

                {/* Mobile Cards */}
                <div className="space-y-4 md:hidden">
                {filteredProjects.map((project, index) => (
                    <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-2"
                    >
                    <div className="flex justify-between items-center">
                        <h3
                        className="font-semibold text-lg dark:text-white cursor-pointer"
                        onClick={() => handleProjectNavigation(project.id)}
                        >
                        {project.title}
                        </h3>
                        <span className="text-sm text-gray-500">#{index + 1}</span>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        <p>{t('services')}: <strong>{project.servicesCount}</strong></p>
                        <p>{t('teamMembers')}: <strong>{project.members}</strong></p>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <Link to={`/project/edit/${project.id}`}>
                        <button className="text-blue-500 text-sm">{t('edit')}</button>
                        </Link>
                        <button
                        className="text-red-500 text-sm"
                        onClick={() => handleDelete(project.id)}
                        >
                        {t('delete')}
                        </button>
                    </div>
                    </div>
                ))}

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-300">
                    {t('noProjectsFound')}
                    </p>
                )}
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Projects