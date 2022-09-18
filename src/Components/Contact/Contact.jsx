import React, { useRef, useState } from 'react';
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

 

    /*https://www.emailjs.com/docs/examples/reactjs/*/
  
        const form = useRef();
        const [done,setDone] = useState(false);
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_2eg1gr2', 'template_c3bxfwj', form.current, '0-7xqHMlzeusVpg3y')
            .then((result) => {
                console.log(result.text);
               
            }, (error) => {
                console.log(error.text);
            });
        };

   //////////////////////////////////////////////////////



  return (
   <div className="contact-form1" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span></span>
                <span>Contact Me</span>
            </div>
        </div>


        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='email' />
                <textarea name="message" className='user'  placeholder='Message'/>
                <input type="submit" value='Send' className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
            </form>
        </div>

   </div>
  )
}

export default Contact