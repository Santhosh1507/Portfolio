import React from 'react'
import Styles from './Contact.module.css'
import { getImageUrl } from "../../Images";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8110fe57-bde9-4d6a-aaba-5375a3e9608d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={Styles.container} id='contact'>
      <h2 className={Styles.title}>Contact us</h2>
      <div className={Styles.titleitems}>
        <div className={Styles.imageitem}>
          <img src={getImageUrl("Contact/contact.png")} alt="" className={Styles.image} />
        </div>
        <div className={Styles.titleitem}>
          <h5>Message me</h5>
          <form onSubmit={onSubmit} >
            <input type="hidden" name="access_key" value="8110fe57-bde9-4d6a-aaba-5375a3e9608d" />
            <input type="text" placeholder='Name' name="name" required className={Styles.inputitem} />
            <input type="text" placeholder='Email' name="email" required className={Styles.inputitem} />
            <input type="text" placeholder='Subject' name="subject" required className={Styles.inputitem} />
            <textarea typeof="text" placeholder='Message..' name="message" required className={Styles.inputitem1} />
            {/* <input type="text" placeholder='Message..' className={Styles.inputitem1} /> */}
            {/* <input type="submit" className={Styles.submitbtn} value='Submit' /> */}

            <div className={Styles.itemsbutton}>
              <span className="spanresult">{result}</span>
              <button type="submit" className={Styles.submitbtn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact