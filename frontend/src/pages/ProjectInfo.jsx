import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import ProjectInfoCard from '../components/ProjectInfoCard'



const ProjectInfo = () => {

    const { id } = useParams()
    const [project, setProject] = useState()

    const { t, i18n } = useTranslation()


    useEffect(() => {
      const localProject = JSON.parse(localStorage.getItem('projects')).find(project => project.id == Number(id))

      setProject(localProject)
    }, [])

    const downloadProjectInfo = () => {
        Swal.fire({
          title: t("warning"),
          text: t("downloadProjectText"),
          icon: "warning",
          confirmButtonText: t("okButton"),
          confirmButtonColor: "red",
          cancelButtonText: t("cancelButton"),

          showCancelButton: true
        }).then((result) => {
          if(result.isConfirmed) {
            const pdf = new jsPDF()

            const rows = project.services.map((service) => [
              service.name,
              service.email,
              service.password
            ])


            pdf.setFontSize(16)
            pdf.text('Servant - Project Info', 20, 20)


            pdf.setFontSize(12)
            pdf.text(`Name: ${project.title}`, 20, 40)
            pdf.text(`Description: ${project.description}`, 20, 50)
            pdf.text(`Team Members: ${project.members}`, 20, 60)

            autoTable(pdf, {
              startY: 70,
              head: [["Name", "Email", "Password"]],
              body: rows
            })


            pdf.save("project-desc.pdf")
          }
        }) 
        

    }
    

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold dark:text-white'>{t('projectInfo')}</h1>
                <button className='border rounded bg-blue-500 text-white p-2 hover:bg-blue-700 hover:cursor-pointer' onClick={downloadProjectInfo}>{t('downloadProjectInfo')}</button>
            </div>
            <ProjectInfoCard project={project} />
        </main>
      </div>
    </div>
  )
}

export default ProjectInfo