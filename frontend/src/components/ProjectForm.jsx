import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';




const ProjectForm = ({ title_pass, description_pass, services_pass, members_pass, id_pass }) => {
    const [title, setTitle] = useState(title_pass || '')
    const [description, setDescription] = useState(description_pass || '')
    const [services, setServices] = useState(services_pass || [])
    const [members, setMembers] = useState(members_pass || '')
    const [errors, setErrors] = useState([{}])

    const { t, i18n } = useTranslation();

    const notify = () => toast.success(t("projectDataSaved"), {
        position: i18n.language === 'ar' ? "top-left" : "top-right",
        autoClose: 3000,
    });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = []
        if (!title) {
            newErrors.push({ field: 'title', message: t('titleRequired') })
        } if (!description) {
            newErrors.push({ field: 'description', message: t('descriptionRequired') })
        } if (!services.length) {
            newErrors.push({ field: 'services', message: t('servicesRequired') })
        } if(!members) {
            newErrors.push({ field: 'members', message: t('membersRequired') })
        }
        if (newErrors.length > 0) {
            setErrors(newErrors)
            return
        }
        
        const existingProjects = JSON.parse(localStorage.getItem('projects')) || []

        if (id_pass) {
            // editing: update existing project
            const updatedProjects = existingProjects.map(p =>
                p.id === id_pass
                    ? { ...p, title, description, services, members }
                    : p
            )
            localStorage.setItem('projects', JSON.stringify(updatedProjects))
        } else {
            // adding: create new project
            const newProject = { id: Date.now(), title, description, services, members }
            localStorage.setItem('projects', JSON.stringify([...existingProjects, newProject]))
        }


        

        navigate('/projects')
        notify()
    }

    const handleServicesChange = (e) => {
        const value = e.target.value
        const servicesArray = value.split(',').map(service => service.trim())
        setServices(servicesArray)
    }
  return (
        <form className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-5 dark:bg-gray-800">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="title">
                    {t('projectTitle')}
                </label>
                <input
                    type="text"
                    id="title"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder={t('enterProjectTitle')}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.find(error => error.field === 'title') && (
                    <p className="text-red-500 text-xs mt-2">
                        {errors.find(error => error.field === 'title').message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="description">
                    {t('projectDescription')}
                </label>
                <textarea
                    id="description"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder={t('enterProjectDescription')}
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.find(error => error.field === 'description') && (
                    <p className="text-red-500 text-xs mt-2">
                        {errors.find(error => error.field === 'description').message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="services" className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">{t('projectServices')}</label>
                <input
                    type="text"
                    id="services"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder={t('enterProjectServices')}
                    value={services}
                    onChange={(e) => handleServicesChange(e)}
                />
                {errors.find(error => error.field === 'services') && (
                    <p className="text-red-500 text-xs mt-2">
                        {errors.find(error => error.field === 'services').message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="members" className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">{t('projectMembers')}</label>
                <input
                    type="text"
                    id="members"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder={t('enterProjectMembers')}
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                />
                {errors.find(error => error.field === 'members') && (
                    <p className="text-red-500 text-xs mt-2">
                        {errors.find(error => error.field === 'members').message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition dark:bg-green-500 dark:hover:bg-green-600"
                onClick={handleSubmit}
            >
                {t('saveProject')}
            </button>
            
        </form>
  )
}

export default ProjectForm