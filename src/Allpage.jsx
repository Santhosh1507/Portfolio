import React from 'react'
import About from './Component/About/About'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import Footer from './Component/footer/Footer'
import Skills from './Component/Skills/Skills'

const Allpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Allpage