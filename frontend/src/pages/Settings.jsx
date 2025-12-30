import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Settings = () => {

    const navigate = useNavigate()

    const handleDarkModeToggle = (mode) => {
        if (mode === 'dark') {
            localStorage.theme = "dark";
        } else {
            localStorage.theme = "light";
        }

        document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
        );

    }

    const handleDelete = () => {
        Swal.fire({
                    title: "Warning!",
                    text: "Are you sure you want to delete your account?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33"
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Proceed with deletion logic here
                        console.log(`User Account deleted.`);
                        Swal.fire("Deleted!", "Your account has been deleted.", "success");

                        navigate('/')
                    }
                })
    }


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 space-y-6">
            <h1 className='text-2xl font-semibold text-black dark:text-white'>Settings</h1>
            {/* Profile Info */}
            <form action="#">
                <h2 className='text-xl font-semibold'>Profile</h2>
                <label htmlFor="name" className='mt-4 block'>Full Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className='border rounded w-full p-2 mt-2'
                    placeholder='Full Name'
                    value="John Doe"
                    onChange={() => {}}
                    />
                <label htmlFor="email" className='mt-4 block'>Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className='border rounded w-full p-2 mt-2'
                    placeholder='Email'
                    value="john.doe@example.com"
                    onChange={() => {}}
                    />

                <button className='mt-4 bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 cursor-pointer'>Save Changes</button>
            </form>

            {/* Password Manager Integration */}
            <div>
                <h2 className='text-xl font-semibold'>Password Manager Integration</h2>
            </div>

            {/* Language */}
            <div>
                <h2 className='text-xl font-semibold'>Language</h2>
                <label htmlFor="language" className='mt-4 block'>Select Language</label>
                <select name="language" id="language" className='border rounded w-full p-2 mt-2'>
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </select>
            </div>

            {/* Theme */}
            <div>
                <h2 className='text-xl font-semibold'>Theme</h2>
                <label htmlFor="theme" className='mt-4 block'>Select Theme</label>
                <div className="flex gap-4 mt-2">
                    <button 
                        className='rounded-2xl border p-4 hover:cursor-pointer hover:border-blue-500 hover:shadow'
                        onClick={() => handleDarkModeToggle('light')}
                        ></button>
                    <button 
                        className='rounded-2xl border p-4 bg-black hover:cursor-pointer hover:border-blue-500 hover:shadow'
                        onClick={() => handleDarkModeToggle('dark')}
                        ></button>
                </div>
            </div>

            {/* Delete Account */}
            <div>
                <h2 className="text-xl font-semibold">Delete Account</h2>
                <button 
                className='bg-red-500 px-2 py-1 rounded text-white mt-2 cursor-pointer hover:bg-red-700'
                onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Settings