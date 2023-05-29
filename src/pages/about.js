import React from "react";
import './about.css';
import { FaDotCircle } from "react-icons/fa";
import { FaCode, FaGithub, FaGlobeAsia, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function About(){
    return(
        <>
        <section id='aboutbtn' className='aboutbt'>
            <div className="ablbl">
                <text className="abh-lbl"><hr></hr>About Me<hr></hr></text>
            </div>

            <div className="abhome">
                <div className="abh-1">
                    <div className="abh-1-1">
                        <text className="headab1">Education<hr color="black"></hr></text>
                        <div className="abh-1-1-1">
                            <FaDotCircle className="circle1"></FaDotCircle>
                            <p className="para1"><span className="span1">St.Joseph's College of Engineering<br></br></span><br></br>OMR,Chennai<br></br>October 2021 - Present<br></br>BTech Information Technology</p>
                        </div>
                        <div className="abh-1-1-1">
                            <FaDotCircle className="circle1"></FaDotCircle>
                            <p className="para1"><span className="span1">Alwin Memorial Public School<br></br></span><br></br>Selaiyur, Chennai<br></br>March 2007 - June 2021<br></br>Higher Secondary School</p>
                        </div>
                    </div>
                </div>
                <div className='home2'>
                    <text className="headab2">Quick Links</text>
                    <hr color="black"></hr>
                    <div className='home2-1'>
                        <text className="text0"><FaGlobeAsia></FaGlobeAsia></text>
                        <text className='text1'>Website</text>
                        <text className='text2'><a href='http://Viswanathan-04.github.io/portfolio'>Viswanathan-04</a></text>
                    </div>
                    <div className='home2-1'>
                        <text className="text0"><FaLinkedinIn></FaLinkedinIn></text>
                        <text className='text1'>LinkedIn</text>
                        <text className='text2'><a href='https://www.linkedin.com/in/viswanathan-krishnan-949770229'>Viswanathan-Krishnan</a></text>
                    </div>
                    <div className='home2-1'>
                        <text className="text0"><FaGithub></FaGithub></text>
                        <text className='text1'>GitHub</text>
                        <text className='text2'><a href='https://github.com/Viswanathan-04'>Viswanathan-04</a></text>
                    </div>
                    <div className='home2-1'>
                        <text className="text0"><FaCode></FaCode></text>
                        <text className='text1'>LeetCode</text>
                        <text className='text2'><a href='https://leetcode.com/Viswanathan-04/'>Viswanathan-04</a></text>
                    </div>
                    <div className='home2-1'>
                        <text className="text0"><FaInstagram></FaInstagram></text>
                        <text className='text1'>Instagram</text>
                        <text className='text2'><a href='https://www.instagram.com/vishnu.k04/'>vishnu.k04</a></text>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;