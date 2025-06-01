import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import axios from "axios";
import { useEffect } from "react";
import {  FaPhone, FaGithub, FaInstagram, FaLinkedin, FaExclamationCircle, FaMedium } from "react-icons/fa";

function Contact()
{
    const [val, setVal] = useState("Connecting to Network");
    useEffect(() => {
        axios.get("https://finalspaceapi.com/api/character/avatar/mooncake.jpg")
        .then(response => {
            setVal("1");
        })
        .catch(error => {
            setVal("Error Connecting to Network");
        })
    });
    const sendMail= ((e) => {
        emailjs.init({
            publicKey: `${process.env.REACT_APP_EMAILJS_API}`,
          });
        e.preventDefault();
        if (mail!=="" && message!=="")
        {
            var templateParams = {
                from_name: mail,
                message: message,
                to_name: "vish2004k@gmail.com"
            };
            
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams).then(
            (response) => {
                alert("Message sent to Viswanathan !! ")
            },
            (error) => {
                alert(error);
            },
            );
            document.getElementById("input1").value="";
            document.getElementById("input2").value="";
        }
        else{
            alert("Please fill all the fields !!")
        }
    });
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div className="main-5">
            <h2 className="main-5-1-title" style={{textAlign: "center"}}>Any Queries ?</h2>
            {val!=="Error Connecting to Network" ? <div className="main-5-1">
                <form className="form-contact">
                    <input type="email" id="input1" placeholder="Mail-id" onChange={(event) => setMail(event.target.value)} required></input>
                    <textarea type="text" id="input2" placeholder="Message" onChange={(event) => setMessage(event.target.value)} required></textarea>
                    <button value="Send Message" className="submit-btn" onClick={sendMail}>Submit</button>
                </form>
                <div className="contact-links">
                    <a href="https://github.com/Viswanathan-04" className="link-git"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/viswanathan-krishnan-949770229/" className="link-git"><FaLinkedin/></a>
                    <a href="https://medium.com/@vish2004k" className="link-git"><FaMedium/></a>
                    <a href="tel:+919600071484" className="link-git"><FaPhone style={{rotate: "90deg"}}/></a>
                    <a href="https://instagram.com/vishnu.k04" className="link-git"><FaInstagram/></a>
                </div>
            </div>:
            <div className="main-5-2">
                <FaExclamationCircle className="exclaimation"/>
                <h2 className="main-5-1-title" style={{textAlign: "center"}}>{val}</h2>
            </div>}
        </div>
    );
}
export default Contact;