import React from 'react'
import { getImageUrl } from "../../Images";
import Styles from './Project1.module.css'

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={Styles.container}>
         <img src={getImageUrl(imageSrc)} alt={title} className={Styles.image} />
         <h3 className={Styles.title}>{title}</h3>
         {/* <p className={Styles.description}>{description}</p> */}
         <ul className={Styles.skills}>
         {skills.map((skill, id) => {
         return <li key={id} className={Styles.skill}>{skill}</li>;
         })}
         </ul>
         <div className={Styles.links}>
         <a href={demo} className={Styles.link}>Demo</a>
         </div>                               
    </div>
  )
}
