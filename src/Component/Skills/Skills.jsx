import React from 'react'
import Styles from './Skills.module.css'
import SkillsData from './SkillsData.json'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

function Skills() {
  return (
    <section className={Styles.container} id='skills'>
      <h2 className={Styles.title}>My Skills</h2>
      {/* <div className={Styles.skillitems}>
        <h4 className={Styles.itemtitle1}>Programming Skills</h4>
        <ul className={Styles.skillitem}>
          <li className={Styles.itemtitle}>Html</li>
          <span className={Styles.bar}><span className={Styles.html}></span></span>
          <li className={Styles.itemtitle}>CSS</li>
          <span className={Styles.bar}><span className={Styles.css}></span></span>
          <li className={Styles.itemtitle}>JavaScript</li>
          <span className={Styles.bar}><span className={Styles.javascript}></span></span>
          <li className={Styles.itemtitle}>React js</li>
          <span className={Styles.bar}><span className={Styles.react}></span></span>
        </ul>
      </div> */}
        <div className={Styles.Skillsitems}>
          <ul className={Styles.skilltitle}>
            {
              SkillsData.map((Skill, index) => {
                return <li key={index} className={Styles.skillitem}>{Skill}</li>
              })
            }
          </ul>
        </div>
        {/* <div className={Styles.containerBtn}>
            <a href="resume.docx" download className={Styles.contactBtn}>Download CV <MdOutlineFileDownload /></a>
            <a href="https://github.com/Santhosh1507" className={Styles.contacticon}><FaGithubSquare /></a>
        </div> */}
    </section>
  )
}

export default Skills