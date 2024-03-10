import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Myproject.module.css'
import Project from './Project'

const Myproject = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contant}>
      <nav className={Styles.backcontent}>
            <Link to='/' className={Styles.gobacklink}>Back</Link>
        </nav>
        <h2 className={Styles.title}>My project</h2>
      </div>
        <Project />
    </div>
  )
}

export default Myproject