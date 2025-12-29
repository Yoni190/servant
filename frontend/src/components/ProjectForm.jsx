import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ProjectForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [services, setServices] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
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
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teamMembers">
                    Team Members
                </label>
                <select name="teamMembers" id="teamMembers" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    <option value="">Select team members</option>
                    <option value="member1">Member 1</option>
                    <option value="member2">Member 2</option>
                    <option value="member3">Member 3</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition"
                onClick={handleSubmit}
            >
                Create Project
            </button>
        </form>
  )
}

export default ProjectForm