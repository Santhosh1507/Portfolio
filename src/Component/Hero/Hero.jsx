import React from 'react'
import Styles from './Hero.module.css'
import { getImageUrl } from "../../Images";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Hero() {
  return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hello, I'm Santhosh Kumar.</h1>
            <p className={Styles.description}>
                I'm a full-stack developer wielding the Web-develop like a seasoned architect.
                I enjoy building sites & apps. My focus is React (Node.js).
            </p>
            <div className={Styles.btnitem}>
            <a href="https://app.enhancv.com/share/f3e53479/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" className={Styles.DownloadBtn}>Download CV <MdOutlineFileDownload /></a>
            <div className={Styles.contantitem}>
            <a href="https://www.linkedin.com/in/santhosh1507" className={Styles.contactBtn}><FaLinkedin /></a>
            <a href="https://github.com/Santhosh1507" className={Styles.contactBtn}><FaSquareGithub /></a>
            </div>
            </div>
        </div>
        <img src={getImageUrl("Profile6.png")} alt="Hero Image Profile" className={Styles.profileimage}/>
        <div className={Styles.topBlur}></div>
    </section>
  )
}

export default Hero