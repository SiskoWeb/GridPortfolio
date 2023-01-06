
import '../style/contact.css'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser';
import React, { useState } from "react";
export default function Contact() {

  const [fullName, setFullName] = useState('')
  const [email, setNEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState(false)



  //validation form
  const handleSubmit = (e) => {

    e.preventDefault();
    if (fullName.length == 0 || email.length == 0 || msg.length == 0) {
      setError(true)

    }
    else {
      emailjs.sendForm('service_cry34d6', 'template_25c3ca3', e.target, 'flvvKfUS30GH5ytEc')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
      setError(false)

      setFullName("")
      setNEmail("")

      setMsg("")


    }


  }

  // set data from form 
  const handelName = (e) => {
    setFullName(e.target.value)

  }

  const handelEmail = (e) => {
    setNEmail(e.target.value)

  }
  const handelMsg = (e) => {
    setMsg(e.target.value)

  }
  return (
    <div className='contact'>
      <div className='contact-col1'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.5 }}

          className='contact-subcol1'>
          <div className='text1'>
            <h1>Get in Touch ✨</h1>
            <p>I’m always open to collaborate on a project or hear about an opportunity!</p>
          </div>
          <div className='text2'>
            <div className='text2-1'> <p>WANT TO CALL ME?</p> <p>Schedule a call with me</p></div>

            <div className='text2-2'> <p>JUST WANT TO EMAIL ME?</p> <p>hello@Yassine.info</p></div>
          </div>
          <div className='icons-contact'>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-github"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-youtube"></i>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className='contact-subcol2'>
          <form className='form' onSubmit={handleSubmit}>
            <>
              <input name='name' type='text' placeholder='Name' onChange={handelName}></input>
              {error && fullName.length <= 0 ?
                <label className='errorMSG animate__animated animate__shakeX'>First Name can't be Empty</label> : ""}
            </>
            <>
              <input name='Email' type='email' placeholder='Email' onChange={handelEmail}></input>
              {error && email.length <= 0 ?
                <label className='errorMSG animate__animated animate__shakeX'>Email can't be Empty</label> : ""}
            </>
            <>
              <textarea name='message' placeholder='Type your message' onChange={handelMsg}></textarea>
              {error && msg.length <= 8 ?
                <label className='errorMSG animate__animated animate__shakeX'>Message can't be Empty</label> : ""}
            </>
            <input className='submit-btn' type='submit'></input>
          </form>

        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}

        className='contact-col2'>
        <div className='col-1-contact'>


          <div className='contact-sub-col1'>
            Part 1


          </div>



          {   /*Part 2 add category  */}
          <div className='contact-sub-col2'>
            Part 2

          </div>
          {   /*Part 3 add category  */}
          <div className='contact-sub-col3'>
            Part 3

          </div>
        </div>


      </motion.div>
    </div>
  )
}
