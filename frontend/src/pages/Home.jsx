import React from 'react'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">Main Content</main>
      </div>
    </div>
  )
}

export default Home