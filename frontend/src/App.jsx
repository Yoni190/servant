import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AddProject from './pages/AddProject'
import EditProject from './pages/EditProject'
import { ToastContainer } from 'react-toastify'




const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/add" element={<AddProject />} />
        <Route path="/project/edit/:id" element={<EditProject />} />
      </Routes>

      <ToastContainer
        theme='light'
      />
    </BrowserRouter>
  )
}

export default App
