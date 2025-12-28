import React from 'react'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import StatCard from '../components/StatCard.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard title="Projects" value="5" />
            <StatCard title="Services" value="18" />
            <StatCard title="Team Members" value="12" />
          </div>

          {/* Charts */}
          
        </main>
      </div>
    </div>
  )
}

export default Home