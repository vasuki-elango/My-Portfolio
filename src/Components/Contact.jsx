import React, { useRef } from 'react'
import './Contact.css'
import whats from '../assets/whatsapp.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import linkedin from '../assets/Linkedin.png'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_4xppfn2', 'template_c9um6pk', form.current, {
        publicKey: 'wwfNiu2VFHQ6N8K_m',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        <h1 className="sectionTitle">Contact Me</h1>
        <p className="sectionsubtitle">Please fill out the form below to discuss any work opportuities.</p>
        <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
            <input type="text" name="your_name" className='name' placeholder='Your Name'/>
            <input type="email" name="your_email" className='email' placeholder='Your Email'/>
            <textarea className='msg' name="message"  rows="10" placeholder='Your Message'></textarea>
            <button type="submit"  value='Send' className='sumbitbtn'>Submit</button>
        </form>
        <div className="links">
            <a href="https://wa.me/+91 8903183013"><img src={whats} alt="Whatsapp" className="link" /></a>
            <a href="mailto:vasukie96@gmail.com"><img src={gmail} alt="Gmail" className="link" /></a>
            <a href="https://github.com/vasuki-elango"><img src={github} alt="GitHub" className="link" /></a>
            <a href="https://www.linkedin.com/in/vasuki-e-b76441246/"><img src={linkedin} alt="Linkedin" className="link" /></a>
        </div>
    </section>
  )
}
