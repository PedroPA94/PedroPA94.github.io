import PropTypes from 'prop-types'
import React from 'react'
import projects from '../data/projects'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects ({ language }) {
  return (
    <div className="Projects">
      <div>
        <h2>{ language === 'pt' ? 'Alguns dos meus projetos' : 'Some of my projects'}</h2>
        <div className='projects-list'>
          {
            projects.map((project) => <ProjectCard key={project.link} project={project} language={language} />)
          }
        </div>

      </div>
    </div>
  )
};

Projects.propTypes = {
  language: PropTypes.string.isRequired
}
