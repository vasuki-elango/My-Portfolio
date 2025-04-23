import React, { useRef } from 'react'
import whats from '../assets/whatsapp.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import linkedin from '../assets/Linkedin.png'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

export const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_7yikt6v', 'template_c9um6pk', form.current, {
        publicKey: 'fxbQ7AA9x64KABAOP',
      })
      .then(
        () => {
          toast.success('SUCCESS!', {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        },
        (error) => {
          toast.error('Failed',{
            position: "top-right",
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        },
      );
      form.current.reset()
  };

  return (
    <section className='pb-12 mx-auto max-w-[45rem] p-5' id='contact'>
        <h1 className="sectionTitle">Contact Me</h1>
        <p className='text-center'>Let’s work together! Feel free to reach out via the form below or through LinkedIn/email</p>

        {/* form page */}
        <form className='w-full' ref={form} onSubmit={sendEmail}>
            <input type="text" name="your_name" className='block w-full bg-zinc-800 p-3 rounded-xl mt-4' placeholder='Your Name' required/>
            <input type="email" name="your_email" className='block w-full bg-zinc-800 p-3 rounded-xl mt-4' placeholder='Your Email' required/>
            <textarea name="message" rows="10" placeholder='Your Message' className='block w-full bg-zinc-800 p-3 rounded-xl mt-4' required></textarea>
            <button type="submit" value='Send' className='w-full bg-blue-500 py-3 my-4 rounded-xl'>Submit</button>
        </form>

        {/* social links */}
        <div className="flex items-center justify-center">
            <a href="https://wa.me/+918903183013" target='__blank'><img src={whats} alt="Whatsapp" className="w-[3rem] h-[3rem] object-cover mx-2" /></a>
            <a href="mailto:vasukie96@gmail.com" target='__blank'><img src={gmail} alt="Gmail" className="w-[3rem] h-[3rem] object-cover mx-2" /></a>
            <a href="https://github.com/vasuki-elango" target='__blank'><img src={github} alt="GitHub" className="w-[3rem] h-[3rem] object-cover mx-2" /></a>
            <a href="https://www.linkedin.com/in/vasuki-e-b76441246/" target='__blank'><img src={linkedin} alt="Linkedin" className="w-[3rem] h-[3rem] object-cover mx-2" /></a>
        </div>
    </section>
  )
}
