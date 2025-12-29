import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ProjectForm = ({ title_pass, description_pass, services_pass }) => {
    const [title, setTitle] = useState(title_pass || '')
    const [description, setDescription] = useState(description_pass || '')
    const [services, setServices] = useState(services_pass || [])
    const [errors, setErrors] = useState([{}])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = []
        if (!title) {
            newErrors.push({ field: 'title', message: 'Title is required' })
        } if (!description) {
            newErrors.push({ field: 'description', message: 'Description is required' })
        } if (!services.length) {
            newErrors.push({ field: 'services', message: 'At least one service is required' })
        }
        if (newErrors.length > 0) {
            setErrors(newErrors)
            return
        }
        // Handle form submission logic here
        console.log({ title, description, services })
        navigate('/projects')
    }

    const handleServicesChange = (e) => {
        const value = e.target.value
        const servicesArray = value.split(',').map(service => service.trim())
        setServices(servicesArray)
    }
  return (
        <form className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-5">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Project Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter project title"
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Project Description
                </label>
                <textarea
                    id="description"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter project description"
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
                <label htmlFor="services" className="block text-gray-700 text-sm font-bold mb-2">Project Services</label>
                <input
                    type="text"
                    id="services"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter project services"
                    value={services}
                    onChange={(e) => handleServicesChange(e)}
                />
                {errors.find(error => error.field === 'services') && (
                    <p className="text-red-500 text-xs mt-2">
                        {errors.find(error => error.field === 'services').message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition"
                onClick={handleSubmit}
            >
                Save Project
            </button>
        </form>
  )
}

export default ProjectForm