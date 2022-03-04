import React from 'react';
import "./contact.css"
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Github from '../../img/github.png';
import Link from '../../img/linkedin.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const formRef = useRef

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_ggxxtzk', 
            'template_cpcb8b8', 
            formRef.current, 
            'yFACQZ_NuRwMkKDoC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    return(
        <div className="cont" id="contact">
           <div className="cont-bg">
                <div className="cont-wrap">
                    <div className="cont-left">
                        <h1 className="cont-title">Contact</h1>
                        <div className="cont-info">
                            <div className="cont-info-item">
                                <img
                                    src={Phone}
                                    alt="phone"
                                    className="cont-icon"/>
                                    #408-641-0962

                            </div>
                            <div className="cont-info-item">
                                <img
                                    src={Email}
                                    alt="email"
                                    className="cont-icon"/>
                                    <a href="mailto: Samuellutz88@gmail.com">
                                     Samuellutz88@gmail.com
                                     </a>
                            </div>
                            <div className="cont-info-item">
                                <img
                                    src={Github}
                                    alt="phone"
                                    className="cont-icon"/>
                                    <a href="https://github.com/samuellutz">
                                        GitHub
                                    </a>
                            </div>
                            <div className="cont-info-item">
                                <img
                                    src={Link}
                                    alt="phone"
                                    className="cont-icon"/>
                                    <a href="https://www.linkedin.com/in/samuel-lutz-77138020b/">
                                        LinkedIn
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="cont-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name"/>
                            <input type="text" placeholder="Subject" name="user_Subject"/>
                            <input type="text" placeholder="Email" name="user_Email"/>
                            <textarea rows="5" placeholder="message" name="user_message"></textarea>
                            <button>submit</button>
                        </form>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Contact