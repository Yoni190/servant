import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AddProject from './pages/AddProject'
import EditProject from './pages/EditProject'
import { ToastContainer } from 'react-toastify'
import Logs from './pages/Logs'
import Settings from './pages/Settings'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import ProjectDescription from './pages/ProjectDescription'





const App = () => {
  
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/add" element={<AddProject />} />
        <Route path="/project/edit/:id" element={<EditProject />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/project/description/:id" element={<ProjectDescription />} />
      </Routes>

      <ToastContainer
        theme='light'
      />
    </BrowserRouter>
  )
}

export default App
