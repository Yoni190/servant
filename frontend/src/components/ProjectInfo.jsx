import React from 'react'

const ProjectInfo = ({ project }) => {
  return (
    <div>
        <h2>Project Title</h2>
        <p>{project.title}</p>

        <h2>Project Description</h2>
        <p>{project.description}</p>

        <h2>Project Services</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            {project.services.map((service) => (
                <tr>
                    <td>{service.name}</td>
                    <td>{service.link}</td>
                    <td>{service.email}</td>
                    <td>{service.password}</td>
                </tr>
            ))}
        </table>

        <h2>Project Members</h2>
        <p>{project.members}</p>
        
    </div>
  )
}

export default ProjectInfo