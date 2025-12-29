import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const Projects = () => {

    const projects = [
        {id: 1, title: "Alpha", services: 5, members: 6},
        {id: 2, title: "Beta", services: 3, members: 4},
        {id: 3, title: "Gamma", services: 8, members: 2}
    ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6">

            {/* Title */}
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>Projects</h1>
                <Link to="/projects/add">
                    <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Add New Project</button>
                </Link>
            </div>

            {/* Body */}
            <div className='space-y-6'>
                <div className="bg-white rounded shadow p-4 ">
                    <h2 className='text-lg font-semibold'>Filter</h2>
                    <form action="#" className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                        <input
                            className='border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Project Title'/>
                        <input
                            className='border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="number"
                            name="services"
                            id="services"
                            placeholder='Number of Services'/>
                        <input
                            className='border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="number"
                            name="members"
                            id="members"
                            placeholder='Number of Team Members'/>
                        <button
                            type="submit"
                            className='bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 w-32'>
                            Apply Filters
                        </button>
                    </form>
                </div>
                <table className='w-full bg-white rounded shadow overflow-hidden'>
                    <thead className='bg-gray-100 text-left'>
                        <tr>
                            <th className='p-3'>ID</th>
                            <th className='p-3'>Title</th>
                            <th className='p-3'>Services</th>
                            <th className='p-3'>Team Members</th>
                            <th className='p-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className='border-t hover:bg-gray-50'>
                                <td className='p-3'>{project.id}</td>
                                <td className='p-3 font-medium'>{project.title}</td>
                                <td className='p-3'>{project.services}</td>
                                <td className='p-3'>{project.members}</td>
                                <td className='p-3 space-x-3'>
                                    <button className="text-blue-500 hover:underline hover:cursor-pointer">Edit</button>
                                    <button className="text-red-500 hover:underline hover:cursor-pointer">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Projects