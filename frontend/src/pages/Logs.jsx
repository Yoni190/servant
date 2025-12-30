import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Logs = () => {

    const logs = [
        {id: 1, action: "Add services", performed: "John", project: "Alpha", time: "4:00pm"},
        {id: 2, action: "Edit services", performed: "Jonathan", project: "Beta", time: "7:00pm"},
        {id: 3, action: "Add member", performed: "Tom", project: "Gamma", time: "10:00pm"}
    ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6">

            {/* Title */}
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>Audit Logs</h1>
            </div>

            {/* Body */}
            <div className='space-y-6'>
                <div className="bg-white rounded shadow p-4 ">
                    <h2 className='text-lg font-semibold'>Filter</h2>
                    <form action="#" className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                        <select
                            name="project"
                            id="project"
                            className='border rounded'
                            >
                            <option value="">Select a Project</option>
                            <option value="alpha">Alpha</option>
                            <option value="beta">Beta</option>
                            <option value="gamma">Gamma</option>
                        </select>
                        <input
                            type="time" 
                            name="time" 
                            id="time" 
                            className='border rounded-xl p-4'
                            />
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
                            <th className='p-3'>Action</th>
                            <th className='p-3'>Performed By</th>
                            <th className='p-3'>Project</th>
                            <th className='p-3'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} className='border-t hover:bg-gray-50'>
                                <td className='p-3'>{log.id}</td>
                                <td className='p-3 font-medium'>{log.action}</td>
                                <td className='p-3'>{log.performed}</td>
                                <td className='p-3'>{log.project}</td>
                                <td className='p-3'>{log.time}</td>
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

export default Logs