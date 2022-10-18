import React, { useState } from 'react'
import About from './components/About'
import Language from './components/Language'
import MediaIcons from './components/MediaIcons'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Title from './components/Title'
import './styles/App.css'

function App () {
  const [language, setLanguage] = useState('en')

  return (
    <div className="App">
      <Language language={language} setLanguage={setLanguage} />
      <main>
        <Title language={language} />
        <About language={language} />
        <Skills language={language} />
        <hr />
        <Projects language={language} />
      </main>
      <footer>
        <MediaIcons language={language} />
        <p>&copy;Pedro Papini, 2022</p>
      </footer>
    </div>
  )
}

export default App
