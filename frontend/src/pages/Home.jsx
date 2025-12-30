import React from 'react'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import StatCard from '../components/StatCard.jsx'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const { t } = useTranslation();

  const servicesPerProject = [
    { project: 'Alpha', services: 5 },
    { project: 'Beta', services: 3 },
    { project: 'Gamma', services: 8 },
  ]

  const accessLevels = [
    { id: 'Owner', label: 'Owner', value: 2 },
    { id: 'Manager', label: 'Manager', value: 4 },
    { id: 'Member', label: 'Member', value: 6 },
  ]


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6 dark:bg-gray-700">

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard title="Projects" value="5" />
            <StatCard title="Services" value="18" />
            <StatCard title="Team Members" value="12" />
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
                />
            </div>
            {/* Access Levels */}
            <div className="bg-white p-4 rounded shadow h-[300px] dark:bg-gray-800">
              <h2 className="font-semibold mb-2 dark:text-white">Access Level Distribution</h2>
              <ResponsivePie
                data={accessLevels}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
              />
            </div>
          </div>

          {/* Recent Logs */}
          <div className="bg-white p-4 rounded shadow dark:bg-gray-800">
            <h2 className="font-semibold mb-3 dark:text-white">Recent Activity</h2>
            <ul className="space-y-2 text-sm">
              <li className="dark:text-gray-400">Test added Chapa to Project Alpha</li>
              <li className="dark:text-gray-400">Test invited Test to Project Beta</li>
              <li className="dark:text-gray-400">Test's role changed to manager in Project gamma</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home