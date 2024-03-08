import React from 'react'
import Styles from './Contact.module.css'
import { getImageUrl } from "../../Images";

function Contact() {
  return (
    <div className={Styles.container} id='contact'>
      <h2 className={Styles.title}>Contact us</h2>
      <div className={Styles.titleitems}>
        <div className={Styles.imageitem}>
          <img src={getImageUrl("Contact/contact.png")} alt="" className={Styles.image}/>
        </div>
        <div className={Styles.titleitem}>
          <h5>Message me</h5>
          <form action="">
            <input type="text" placeholder='Name' className={Styles.inputitem}/>
            <input type="text" placeholder='Email' className={Styles.inputitem}/>
            <input type="text" placeholder='Subject' className={Styles.inputitem}/>
            <input type="text" placeholder='Message..' className={Styles.inputitem1}/>
          </form>
          <input type="submit" className={Styles.submitbtn} value='Submit'/>
        </div>
      </div>
    </div>
  )
}

export default Contact