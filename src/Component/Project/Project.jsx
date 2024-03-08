import React from 'react'
import projects from "./Projects.json";
import { ProjectCard } from './ProjectCard';
import Styles from './Project.module.css'
import { ViewAll } from './ViewAll';

function Project() {
  return (
     <section className={Styles.container}  id='project'>
      <h2 className={Styles.title}>My Projects</h2>
      <div className={Styles.projects}>
        {
          projects.map((Project, id) => {
            return <ProjectCard key={id} project={Project} />
          })
        }
      </div>
      <ViewAll />
     </section>
  )
}

export default Project