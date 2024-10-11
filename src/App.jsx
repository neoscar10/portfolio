import './App.css'
import Hero from './components/Hero/Hero'
import { ThemeProvider } from './common/ThemeContext'
import React from 'react'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
    
    
  )
}

export default App
