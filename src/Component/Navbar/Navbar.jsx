import React, { useState } from 'react'
import Styles from './Navbar.module.css'
import { getImageUrl } from "../../Images";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={Styles.navbar}>
        <a className={Styles.title} href="/">Portfolio</a>
        <div className={Styles.menu}>
          <img className={Styles.menuBtn} src={
            menuOpen
              ? getImageUrl("Icons/menu.png")
              : getImageUrl("Icons/menu.png")
          } alt="" onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
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