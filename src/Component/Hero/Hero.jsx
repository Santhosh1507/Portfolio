import React from 'react'
import Styles from './Hero.module.css'
import  Img1 from '../../../Images/Profile.png'

function Hero() {
  return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hello, I'm Santhosh Kumar.</h1>
            <p className={Styles.description}>
                I'm a full-stack developer wielding the Web-develop like a seasoned architect.
                I enjoy building sites & apps. My focus is React (Node.js).
            </p>
            <a href="mailto:firefriends15072002@gmail.com" className={Styles.contactBtn}>Contact Me</a>
        </div>
        <img src={Img1} alt="Hero Image Profile" className={Styles.profileimage}/>
        <div className={Styles.topBlur}></div>
        <div className={Styles.bottomBlur}></div>
    </section>
  )
}

export default Hero