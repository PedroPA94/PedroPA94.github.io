import PropTypes from 'prop-types'
import React from 'react'
import '../styles/Language.css'

export default function Language ({ setLanguage, language }) {
  return (
    <div className='Language'>
      <label>
        <input
          type='radio'
          name='lang'
          value='en'
          checked={language === 'en'}
          onChange={ ({ target }) => setLanguage(target.value) }
        />
        EN
      </label>
      <span>|</span>
      <label>
        <input
          type='radio'
          name='lang'
          value='pt'
          checked={language === 'pt'}
          onChange={ ({ target }) => setLanguage(target.value) }
        />
        PT
      </label>
    </div>
  )
};

Language.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
}
