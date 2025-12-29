import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProjectForm from '../components/ProjectForm'


const EditProject = () => {

    const services_data = ["Service A", "Service B", "Service C"]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6">
            <h1 className='text-2xl font-semibold'>Edit Project</h1>
            <ProjectForm 
                title_pass="Alpha"
                description_pass="This is the Alpha project."
                services_pass={services_data}
            />
        </main>
     </div>
    </div>
  )
}

export default EditProject