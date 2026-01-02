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


    const [servicesElement, setServicesElement] = useState('')
    const [servicesArray, setServicesArray] = useState([])

    const [selectedService, setSelectedService] = useState(0)

    const [serviceLinks, setServiceLinks] = useState([])

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

    const handleServicesAddition = () => {
        

        const temp = services
        temp.push(servicesElement)

        setServices(temp)
        setServicesElement('')

        console.log(services)
        console.log('clicked')
    }

    const handleServiceDeletion = (index) => {
        setServices(prev =>
            prev.filter((_, i) => i !== index)
        )
    }

    const handleServiceLinkChange = (e, index) => {
         const value = e.target.value

        setServiceLinks(prev => {
            const updated = [...prev]
            updated[index] = value
            return updated
        })
    }

    const storeServiceData = (index) => {
        console.log("Saved")
        
        const serviceLink = serviceLinks[index]
        
        const storedLinks = JSON.parse(localStorage.getItem('serviceData') || '[]')

        if(storedLinks.find(item => item.serviceIndex === index)) {
            console.log("No")
            const serviceIndex = storedLinks.findIndex(item => item.serviceIndex === index)

            storedLinks[serviceIndex].link = serviceLink
        } else {
            storedLinks.push({
                serviceIndex: index,
                link: serviceLink
            }
        )
        }
        

        localStorage.setItem('serviceData', JSON.stringify(storedLinks))
        console.log(storedLinks)
        
    }

  return (
        <div className="dark:bg-gray-800 flex gap-5">
            <form className='bg-white rounded-2xl shadow-lg p-8 space-y-5 w-full max-w-lg'>
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
                    <div className='flex'>
                        <input
                            type="text"
                            id="services"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder={t('enterProjectServices')}
                            value={servicesElement}
                            onChange={(e) => setServicesElement(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter') {
                                    e.preventDefault()
                                    handleServicesAddition()
                                }
                            }
                        }
                        />
                        <button
                        className='border px-4 rounded bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer'
                        type='button'
                        onClick={handleServicesAddition}
                        >
                            +
                        </button>
                    </div>
                    <div className='grid grid-cols-4 gap-3 mt-2'>
                        {services.map((service, index) => (
            
                                <div
                                    key={index}
                                    className='bg-gray-300 p-2 border flex justify-between'
                                    >
                                    <p>
                                        {service}
                                    </p>
                                    <button
                                        className='cursor-pointer'
                                        onClick={() => handleServiceDeletion(index)}
                                        type='button'
                                        >
                                            x
                                        </button>
            
                                </div>
            
                        ))}
                    </div>
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

            {/* Service Info */}
            {services.length > 0 && (
                <div className='w-full max-w-lg rounded bg-white shadow-lg p-4'>
                        {/* Tabs */}
                        <div>
                            {services.map((service, index) => (
                                <button
                                className={`border rounded ${selectedService === index ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'} text-white p-2 hover:cursor-pointer`}
                                key={service}
                                onClick={() => setSelectedService(index)}
                                >
                                    {service}
                                </button>
                            ))}
                            
                        </div>

                            {services.map((service, index) => {
                                return (
                                    index === selectedService && (
                                    <div key={index}>
                                            {/* Service URL */}
                                            <div className='flex flex-col mt-2'>
                                                <label htmlFor="link">Service URL</label>
                                                <input
                                                type="text"
                                                name="link"
                                                placeholder='Enter service url'
                                                value={serviceLinks[index] || ""}
                                                onChange={(e) => handleServiceLinkChange(e, index)}
                                                className='border rounded p-2'
                                                id={`link-${index}`} />
                                            </div>

                                            {/* Service Email */}
                                            <div className='flex flex-col mt-2'>
                                                <label htmlFor="email">Service Email</label>
                                                <input
                                                type="email"
                                                name="email"
                                                placeholder='Enter email used for the service'
                                                className='border rounded p-2'
                                                id="email" />
                                            </div>

                                            {/* Service Password */}
                                            <div className='flex flex-col mt-2'>
                                                <label htmlFor="password">Service Password</label>
                                                <input
                                                type="password"
                                                name="password"
                                                placeholder='Enter password used for the service'
                                                className='border rounded p-2'
                                                id="password" />
                                            </div>
                                            <button className='border rounded bg-blue-500 text-white p-2 mt-2 w-full hover:bg-blue-600 hover:cursor-pointer'
                                            onClick={() => storeServiceData(index)}
                                            >
                                                Save
                                            </button>
                                    </div>
                                )
                                )
                                
                                
                            })}
                            
                            

                        
                </div>
            )}
            
            
        </div>
  )
}

export default ProjectForm