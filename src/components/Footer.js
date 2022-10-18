import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer () {
  return (
    <footer>
      <div className='media-icons'>
        <a href='https://github.com/PedroPA94' target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/pedro-papini-de-araujo/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <span><FaEnvelope /></span>
      </div>
      <p>&copy;Pedro Papini, 2022</p>
    </footer>
  )
};
