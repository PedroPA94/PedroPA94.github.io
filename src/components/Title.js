import PropTypes from 'prop-types'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import profilePic from '../img/profile.avif'
import '../styles/Title.css'

export default function Title ({ language }) {
  const welcomeText = language === 'pt' ? 'Oi, eu sou o Pedro!' : "Hi, I'm Pedro!"
  const jobText = language === 'pt' ? 'desenvolvedor web' : 'web developer'

  return (
    <div className='Title'>
      <img src={profilePic} alt="profile pic"/>
      <h1>{welcomeText}</h1>
      <h3>&lt;{jobText}&gt;</h3>
      <div className='media-icons'>
        <a href='https://github.com/PedroPA94' target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/pedro-papini-de-araujo/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <span><FaEnvelope /></span>
      </div>
    </div>
  )
};

Title.propTypes = {
  language: PropTypes.string.isRequired
}
