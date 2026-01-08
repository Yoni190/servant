import React from 'react'

const ProjectInfo = ({ project }) => {
  return (
    <div>
        <h2>Project Title</h2>
        <p>{project.title}</p>
    </div>
  )
}

export default ProjectInfo