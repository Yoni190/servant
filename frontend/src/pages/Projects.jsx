import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

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
            <h1 className='text-2xl font-semibold'>Projects</h1>
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
        </main>
      </div>
    </div>
  )
}

export default Projects