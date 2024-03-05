import React from 'react'
import Styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={Styles.navbar}>
        <a className={Styles.title} href="/">Portfolio</a>
        <div className={Styles.menu}>
        <ul className={Styles.menutitle}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar