import React from 'react'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import StatCard from '../components/StatCard.jsx'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'

const Home = () => {

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
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6">

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard title="Projects" value="5" />
            <StatCard title="Services" value="18" />
            <StatCard title="Team Members" value="12" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            {/* Services Per Project */}
            <div className="bg-white p-4 rounded shadow h-[300px]">
              <h2 className="font-semibold mb-2">Services per project</h2>
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
            <div className="bg-white p-4 rounded shadow h-[300px]">
              <h2 className="font-semibold mb-2">Access Level Distribution</h2>
              <ResponsivePie
                data={accessLevels}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
              />
            </div>
          </div>

          {/* Recent Logs */}
        </main>
      </div>
    </div>
  )
}

export default Home