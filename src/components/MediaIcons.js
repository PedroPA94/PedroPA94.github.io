import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styles/MediaIcons.css'

const copy = require('clipboard-copy')

export default function MediaIcons ({ language }) {
  const [showMessage, setShowMessage] = useState(false)

  const copyEmail = () => {
    copy('ppapinia@gmail.com')
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }

  return (
    <div className='media-icons'>
      <a href='https://github.com/PedroPA94' target='_blank' rel="noreferrer"><FaGithub /></a>
      <a href='https://www.linkedin.com/in/pedro-papini-de-araujo/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
      <div className='email'>
        <span onClick={copyEmail}><FaEnvelope /></span>
        { showMessage && <span className='email-msg'>{ language === 'pt' ? 'Email copiado!' : 'Email copied!'}</span> }
      </div>
  </div>
  )
}

MediaIcons.propTypes = {
  language: PropTypes.string.isRequired
}
