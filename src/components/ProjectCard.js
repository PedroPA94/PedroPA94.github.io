import PropTypes from 'prop-types'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import '../styles/ProjectCard.css'

export default function ProjectCard ({ project, language }) {
  const { image, text, tags, github, link } = project
  const { name, description } = text[language]

  return (
    <div className='ProjectCard'>
      <img src={image} alt={name} />
      <div className='project-title'>
        <h4>{name}</h4>
        <div className='project-links'>
          <a href={github} target='_blank' rel="noreferrer"><FaGithub /></a>
          <a href={link} target='_blank' rel="noreferrer"><FiExternalLink /></a>
        </div>
      </div>
      <p>{description}</p>
      <div className='tags'>
      {
        tags.map((tag) => <span className='tag' key={tag}>{tag}</span>)
      }
      </div>
    </div>
  )
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    text: PropTypes.shape({
      en: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
      }),
      pt: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
      })
    }),
    image: PropTypes.any,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  language: PropTypes.string.isRequired
}
