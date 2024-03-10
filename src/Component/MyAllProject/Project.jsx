import React from 'react'
import project from "./Project.json";
import { ProjectCard } from './ProjectCard';
import Styles from './Project.module.css'

function Project() {
  return (
     <section className={Styles.container}>
      <div className={Styles.projects}>
        {
          project.map((Project, id) => {
            return <ProjectCard key={id} project={Project} />
          })
        }
      </div>
     </section>
  )
}

export default Project