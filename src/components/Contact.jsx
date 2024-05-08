import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact =() => {
    return(
        <>
        <div className="container contact" id="contact">
            <h1>CONTACT ME</h1>
            <div className="contact-icon"
                 data-aos="zoom-in-up"
                 data-aos-duration="1000"
            >
                <a href="https://www.instagram.com" className="items">
                    <FaInstagramSquare  className="icons"/>
                </a>
                <a href="https://www.facebook.com" className="items" >
                    <FaFacebook  className="icons"/>
                </a>
                <a href="https://www.linkedin.com/in/mukta-kashid-b574b3255" className="items">
                    <FaLinkedin  className="icons"/>
                </a>
                <a href="https://www.twitter.com" className="items">
                    <FaXTwitter  className="icons"/>
                </a>
                <a href="https://www.github.com" className="items">
                    <FaGithubSquare  className="icons"/>
                </a>
                <a href="https://www.gmail.com" className="items">
                    <SiGmail className="icons"/>
                </a>
            </div>
        </div>
        </>
    )
}
export default Contact;