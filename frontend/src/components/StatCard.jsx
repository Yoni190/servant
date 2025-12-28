import React from 'react'

const StatCard = ({ title, value }) => {
  return (
    <div className='bg-white p-4 rounded shadow'>
      <p className='text-sm text-gray-500'>{title}</p>
      <p className='text-2xl font-bold'>{value}</p>
    </div>
  )
}

export default StatCard