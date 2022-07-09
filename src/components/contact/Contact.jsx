import {React, useRef, useState} from "react";
import "./contact.css";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import adress from "../../images/adress.png";
import emailjs from 'emailjs-com';
import {useContext} from 'react';
import {ThemeContext} from '../../context'


export default function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef() 
  const [done,setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm('service_msymrbc','template_j6k88u9',formRef.current,'user_ZS3V2jmIlO8mYDvmRJZX5')
      .then((result) => {
console.log(result.text)
setDone(true)
       })
      .catch((error) => {
console.log(error.text)
      })
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +216 22 374 225
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              sassiaziz50@gmail.com
            </div>
            <div className="c-info-item">
              <img src={adress} alt="" className="c-icon" />
             tunis
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Need a developer ?</b> <br /> get in touch and let's talk
          </p>
          <form ref = {formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode&& '#333'}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode&& '#333'}} type="text" placeholder="Subject" name="subject" />
            <input style={{backgroundColor: darkMode&& '#333'}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode&& '#333'}} rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
            {done && "thank you"}
          </form>
        </div>
      </div>
    </div>
  );
}
