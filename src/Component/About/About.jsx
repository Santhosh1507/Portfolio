import React from 'react'
import Styles from './About.module.css'
// import { getImageUrl } from "../../Images";
import { BsDot } from "react-icons/bs";

function About() {
    return (
        <div className={Styles.container} id='about'>
            <h2 className={Styles.title}>About Me</h2>
            <div className={Styles.content}>
                {/* <img src={getImageUrl("About/About4.png")} alt="Me Sitting with a Laptop" className={Styles.aboutImage}/>
            <ul className={Styles.aboutItems}>
                <li className={Styles.aboutItem}>
                    <img src={getImageUrl("About/Frontimg.png")} alt="" className={Styles.aboutIteamImage}/>
                    <div className={Styles.aboutIteamText}>
                        <h3>Frontend Developer</h3>
                        <p>
                        I'm a frontend developer passionate about creating beautiful and user-friendly web experiences. 
                        I enjoy learning new technologies to improve my skills.
                        </p>
                    </div>
                </li>
                <li className={Styles.aboutItem}>
                    <img src={getImageUrl("About/backendimg.png")} alt="" className={Styles.aboutIteamImage}/>
                    <div className={Styles.aboutIteamText}>
                        <h3>Backend Developer</h3>
                        <p>
                        I'm a backend developer passionate about creating scalable and efficient web applications. 
                        I have experience working in my free time, 
                        I enjoy contributing to open-source projects and exploring new technologies to improve my skills.
                        </p>
                    </div>
                </li>
                <li className={Styles.aboutItem}>
                    <img src={getImageUrl("About/uiimg.png")} alt="" className={Styles.aboutIteamImage}/>
                    <div className={Styles.aboutIteamText}>
                        <h3>Logo Designer</h3>
                        <p>
                         I have designed multiple logo design and create company logo pages as well
                        </p>
                    </div>
                </li>
            </ul> */}
                <p className={Styles.texttitle}><BsDot />Recent Graduated from Meenakshi College with a B.E in Computer
                    Science and Engineering, achieving a total grade point average of
                    7.4%. My academic journey has equipped me with a solid
                    foundation and a drive to harness technology in addressing realworld challenges.
                </p><br />
                <p className={Styles.texttitle}><BsDot />To obtain a challenging career in the IT industry and put all my
                    efforts into the growth of the organization and have a great
                    working environment.
                </p><br />
                <p className={Styles.texttitle}><BsDot />An enthusiastic, punctual & carer minded individual with excellent
                    communication and interpersonal skills.
                </p>
            </div>

        </div>
    )
}

export default About