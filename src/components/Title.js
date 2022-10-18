import PropTypes from 'prop-types'
import React from 'react'

import profilePic from '../img/profile.avif'
import '../styles/Title.css'
import MediaIcons from './MediaIcons'

export default function Title ({ language }) {
  const welcomeText = language === 'pt' ? 'Oi, eu sou o Pedro!' : "Hi, I'm Pedro!"
  const jobText = language === 'pt' ? 'desenvolvedor web' : 'web developer'

  return (
    <div className='Title'>
      <img src={profilePic} alt="profile pic"/>
      <h1>{welcomeText}</h1>
      <h3>&lt;{jobText}&gt;</h3>
      <MediaIcons language={language} />
    </div>
  )
};

Title.propTypes = {
  language: PropTypes.string.isRequired
}
