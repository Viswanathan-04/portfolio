import React from "react";
import './contact.css';
import { FaCode, FaGithub, FaGlobeAsia, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Contact(){
    return(
        <>
        <section id='conbtn' className='conbt'>
            <div className="conlbl">
                <text className="con-lbl"><hr></hr>Contact Me<hr></hr></text>
            </div>
            <div className="conhome">
                <div className="con-1">
                    <div className="con-1-1">
                        <text className="con-1-1-1">Phone</text>
                        <text className="con-1-1-2">9600071484</text>
                    </div>
                    <div className="con-1-1">
                        <text className="con-1-1-1">Email-ID</text>
                        <text className="con-1-1-2">vish2004k@gmail.com</text>
                    </div>
                </div>
                <div className="con-2">
                    <a href="http://Viswanathan-04.github.io/portfolio" className="con-2-1"><FaGlobeAsia></FaGlobeAsia></a>
                    <a href="https://www.linkedin.com/in/viswanathan-krishnan-949770229" className="con-2-1"><FaLinkedinIn></FaLinkedinIn></a>
                    <a href="https://github.com/Viswanathan-04" className="con-2-1"><FaGithub></FaGithub></a>
                    <a href="https://leetcode.com/Viswanathan-04/" className="con-2-1"><FaCode></FaCode></a>
                    <a href="https://www.instagram.com/vishnu.k04/" className="con-2-1"><FaInstagram></FaInstagram></a>
                </div>
            </div>
            <br></br>
        </section>
        </>
    )
}

export default Contact;