import React from 'react'
import Styles from './Hero.module.css'
import { getImageUrl } from "../../Images";

function Hero() {
  return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hello, I'm Santhosh Kumar.</h1>
            <p className={Styles.description}>
                I'm a full-stack developer wielding the Web-develop like a seasoned architect.
                I enjoy building sites & apps. My focus is React (Node.js).
            </p>
            {/* <div className={Styles.btnitem}>
            <a href="mailto:firefriends15072002@gmail.com" className={Styles.contactBtn}>Contact Me</a>
            <a href="mailto:firefriends15072002@gmail.com" className={Styles.contactBtn}>Download CV <MdOutlineFileDownload /></a>
            <a href="" className={Styles.contactBtn}><FaLinkedin /></a>
            </div> */}
        </div>
        <img src={getImageUrl("Profile4.png")} alt="Hero Image Profile" className={Styles.profileimage}/>
        <div className={Styles.topBlur}></div>
    </section>
  )
}

export default Hero