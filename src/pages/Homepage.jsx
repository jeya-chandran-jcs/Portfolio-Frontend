import React from 'react'
import Home from '../components/Home'
import Header from "../components/Header"
import Skills from "./../components/Skill"
import About from '../components/About'
import Education from '../components/Education'
import Intern from '../components/Intern'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Resume from '../components/Resume'
import Footer from '../components/Footer'
export default function Homepage() {
  return (
    <div>
      <Header />
        <Home />
        <About />
        <Skills />
        <Education />
        <Intern />
        <Projects />
        <Resume />
        <Contact />
      <Footer />
    </div>
  )
}
