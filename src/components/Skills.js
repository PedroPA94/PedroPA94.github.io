import PropTypes from 'prop-types'
import React from 'react'
import skills from '../data/skills'
import '../styles/Skills.css'

export default function Skills ({ language }) {
  const displaySkill = (skill) => {
    return (
      <span key={skill.name} className='skill'>
        {skill.logo}
        <span>{skill.name}</span>
      </span>
    )
  }

  return (
    <div className='Skills'>
      <h3>{language === 'pt' ? 'Linguagens' : 'Languages'}</h3>
      <div className="skills-container">
        {
          skills.languages.map((skill) => displaySkill(skill))
        }
      </div>
      <h3>Front-end</h3>
      <div className="skills-container">
        {
          skills.frontend.map((skill) => displaySkill(skill))
        }
      </div>
      <h3>Back-end</h3>
      <div className="skills-container">
        {
          skills.backend.map((skill) => displaySkill(skill))
        }
      </div>
      <h3>{language === 'pt' ? 'Testes' : 'Testing'}</h3>
      <div className="skills-container">
        {
          skills.testing.map((skill) => displaySkill(skill))
        }
      </div>
      <h3>{language === 'pt' ? 'Ferramentas' : 'Tools'}</h3>
      <div className="skills-container">
        {
          skills.tools.map((skill) => displaySkill(skill))
        }
      </div>
    </div>
  )
};

Skills.propTypes = {
  language: PropTypes.string.isRequired
}
