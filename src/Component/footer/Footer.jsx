import React from 'react'
import { getImageUrl } from "../../Images";
import Styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={Styles.container}>
      {/* <div className={Styles.titleitem}>
      <p className={Styles.title}>&copy;2024 Webflow</p>
      </div> */}
      <p className={Styles.title}>&copy;2024 Webflow</p>
          <div className={Styles.imageItem}>
           <img src={getImageUrl("Icons/facebook.png")} alt="" className={Styles.images}/>
           <img src={getImageUrl("Icons/instagram.png")} alt="" className={Styles.images}/>
           <img src={getImageUrl("Icons/twitter.png")} alt="" className={Styles.images}/>
           <img src={getImageUrl("Icons/github.png")} alt="" className={Styles.images}/>
           <img src={getImageUrl("Icons/email.png")} alt="" className={Styles.images}/>
          </div>
    </div>
  )
}

export default Footer