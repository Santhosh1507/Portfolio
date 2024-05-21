import React from 'react'
import Styles from './Contact.module.css'
import { getImageUrl } from "../../Images";

function Contact() {
  return (
    <div className={Styles.container} id='contact'>
      <h2 className={Styles.title}>Contact us</h2>
      <div className={Styles.titleitems}>
        <div className={Styles.imageitem}>
          <img src={getImageUrl("Contact/contact.png")} alt="" className={Styles.image} />
        </div>
        <div className={Styles.titleitem}>
          <h5>Message me</h5>
          <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="8110fe57-bde9-4d6a-aaba-5375a3e9608d"/>
              <input type="text" placeholder='Name' name="name" required className={Styles.inputitem} />
              <input type="text" placeholder='Email' name="email" required className={Styles.inputitem} />
              <input type="text" placeholder='Subject' name="subject" required className={Styles.inputitem} />
              <textarea type="text" placeholder='Message..' name="message" required className={Styles.inputitem1}></textarea>
              {/* <input type="text" placeholder='Message..' className={Styles.inputitem1} /> */}
              {/* <input type="submit" className={Styles.submitbtn} value='Submit' /> */}
              <div class="h-captcha" data-captcha="true"></div>
              <button type="submit" className={Styles.submitbtn}>Submit</button>
          </form>
          <script src="https://web3forms.com/client/script.js" async defer></script>
        </div>
      </div>
    </div>
  )
}

export default Contact