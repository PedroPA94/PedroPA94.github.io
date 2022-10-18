import React, { useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Language from './components/Language'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Title from './components/Title'
import './styles/App.css'

function App () {
  const [language, setLanguage] = useState('en')

  return (
    <div className="App">
      <main>
        <Language language={language} setLanguage={setLanguage} />
        <Title language={language} />
        <About language={language} />
        <Skills language={language} />
        <hr />
        <Projects language={language} />
        <Footer />
      </main>
    </div>
  )
}

export default App
