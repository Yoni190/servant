import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import StatCard from '../components/StatCard.jsx'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { useTranslation } from 'react-i18next'
import usePageTitle from '../config/usePageTitle.js'
import Swal from 'sweetalert2'


const Home = () => {

  usePageTitle('Home | Servant')

  const { t } = useTranslation();

  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [projects, setProjects] = useState([])

  const [totalServices, setTotalServices] = useState(0)
  const [totalMembers, setTotalMembers] = useState(0)

  const [servicesPerProject, setServicesPerProject] = useState([])

  useEffect(() => {
    const localProjects = JSON.parse(localStorage.getItem('projects') || '[]')

    console.log(localProjects)

    const temp = []

    localProjects.map((localProject) => {
      temp.push({
        project: localProject.title,
        services: localProject.services.length
      })
    })
    

    setServicesPerProject(temp)

    setProjects(localProjects)

    setTotalServices(localProjects.reduce((acc, project) => acc + (project.services?.length || 0), 0))
    setTotalMembers(localProjects.reduce((acc, project) => acc + (Number(project.members) || 0), 0))
  }, [])


  const getFormattedDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return `${month}/${date}`;
  };

  // useEffect(() => {
  //     Swal.fire({
  //                 title: t("christmas"),
  //                 text: t("christmasText"),
  //                 confirmButtonColor: "#d33",
  //                 confirmButtonText: t("ok"),
  //     })
  //   }, [])
  
  

  const accessLevels = [
    { id: t('owner'), label: t('owner'), value: 2 },
    { id: t('manager'), label: t('manager'), value: 4 },
    { id: t('member'), label: t('member'), value: 6 },
  ]


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard title="projects" value={projects.length} />
            <StatCard title="services" value={totalServices} />
            <StatCard title="teamMembers" value={totalMembers} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            {/* Services Per Project */}
            <div className="bg-white p-4 rounded shadow h-[300px] dark:bg-gray-800">
              <h2 className="font-semibold mb-2 dark:text-white">{t('servicesPerProject')}</h2>
              <ResponsiveBar
                data={servicesPerProject}
                keys={['services']}
                indexBy="project"
                margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
                padding={0.3}
                axisBottom={{ tickRotation: -20}}
                theme={{
                  axis: {
                    ticks: {
                      text: { fill: isDark ? '#f4f4f4' : '#333'}
                    }
                  }
                }}
                />
            </div>
            {/* Access Levels */}
            <div className="bg-white p-4 rounded shadow h-[300px] dark:bg-gray-800">
              <h2 className="font-semibold mb-2 dark:text-white">{t('accessLevelDistribution')}</h2>
              <ResponsivePie
                data={accessLevels}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                theme={{
                  labels: {
                    text: {
                      fill: isDark ? '#f4f4f4' : '#333',
                      fontSize: 12,
                    },
                  },
                  legends: {
                    text: {
                      fill: isDark ? '#f4f4f4' : '#333',
                      fontSize: 12,
                    },
                  },
                  tooltip: {
                    container: {
                      background: isDark ? '#1f2937' : '#fff',
                      color: isDark ? '#f4f4f4' : '#333',
                    },
                  },
                }}
                colors={isDark ? ['#22D3EE', '#F472B6', '#FACC15'] : ['#3b82f6', '#f87171', '#fbbf24']}
              />
            </div>
          </div>

          {/* Recent Logs */}
          <div className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <h2 className="font-semibold mb-3 dark:text-white">{t('recentActivity')}</h2>
            <ul className="space-y-2 text-sm">
              <li className="dark:text-gray-400">{t('log1')}</li>
              <li className="dark:text-gray-400">{t('log2')}</li>
              <li className="dark:text-gray-400">{t('log3')}</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home