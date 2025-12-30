import React from 'react'

const StatCard = ({ title, value }) => {
  return (
    <div className='bg-white p-4 rounded shadow dark:bg-gray-800'>
      <p className='text-sm text-gray-500 dark:text-gray-400'>{title}</p>
      <p className='text-2xl font-bold dark:text-white'>{value}</p>
    </div>
  )
}

export default StatCard