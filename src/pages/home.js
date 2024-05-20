import React from "react";
import './home.css';
import background from "../res/background.png";
import resume from "../res/Viswanathan_Krishnan_Resume_1.pdf";
import { Link } from "react-router-dom";
import { FaArrowDown, FaCode, FaDotCircle, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Home()
{
    return (
        <div className="main-1">
            <div className="main-1-1">
                <div className="main-1-1-1">
                    <div className="desc-1-1">Hi there,</div>
                    <div className="desc-1-2">I'm <span className="glow">Viswanathan Krishnan</span></div>
                    <div className="desc-1-3">Entry-level Data Science and Fullstack enthusiast who is keen to contribute to a cause. I am a young, energetic and techy individual whose desire to learn is endless.</div>
                    <div className="buttons-1">
                        <a href={resume} download="resume.pdf" className="resume-1"><span>Download Resume</span> <FaArrowDown/></a>
                        <a href="tel:+919600071484" className="contacts-1"><FaPhone style={{rotate: "90deg"}}/><span>Contact Me</span></a>
                    </div>
                </div>
                <img src={background} alt="user-prev"></img>
            </div>
            <div className="main-1-2">
                <div className="education">
                <h2 style={{textAlign: "center"}}>Education</h2>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaDotCircle/>
                        </div>
                        <div className="main-2-1-contents">
                            <p className="main-2-1-desc1">St. Joseph's College of Engineering</p>
                            <p className="main-2-1-desc1">OMR, Chennai-600119</p>
                            <hr></hr>
                            <p className="main-2-1-desc2">CGPA - 8.55</p>
                            <p className="main-2-1-desc2">November 2021 - Present</p>
                            <p className="main-2-1-desc2">Bachelor of Technology, IT</p>
                        </div>
                    </div>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaDotCircle/>
                        </div>
                        <div className="main-2-1-contents">
                            <p className="main-2-1-desc1">Alwin Memorial Public School</p>
                            <p className="main-2-1-desc1">Selaiyur, Chennai-600073</p>
                            <hr></hr>
                            <p className="main-2-1-desc2">Percentage - 94.80%</p>
                            <p className="main-2-1-desc2">June 2012 - May 2021</p>
                            <p className="main-2-1-desc2">Higher Secondary School</p>
                        </div>
                    </div>
                </div>
                <div className="education-1">
                    <h2 style={{textAlign: "center"}}>Quick Links</h2>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaGithub/>
                        </div>
                        <div className="main-2-1-contents">
                            <a className="main-2-1-desc1" href="https://github.com/Viswanathan-04">Viswanathan-04</a>
                        </div>
                    </div>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaLinkedin/>
                        </div>
                        <div className="main-2-1-contents">
                            <a className="main-2-1-desc1" href="https://www.linkedin.com/in/viswanathan-krishnan-949770229/">Viswanathan Krishnan</a>
                        </div>
                    </div>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaCode/>
                        </div>
                        <div className="main-2-1-contents">
                            <a className="main-2-1-desc1" href="https://leetcode.com/Viswanathan-04">Viswanathan-04</a>
                        </div>
                    </div>
                </div>
                <div className="education-1">
                    <h2 style={{textAlign: "center"}}>Contact Details</h2>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaPhone style={{rotate : "90deg"}}/>
                        </div>
                        <div className="main-2-1-contents">
                            <a href="tel:+919600071484" className="main-2-1-desc1">+91 96000 71484</a>
                        </div>
                    </div>
                    <div className="main-2-1">
                        <div className="dot">
                            <FaEnvelope/>
                        </div>
                        <div className="main-2-1-contents">
                            <Link to="/contact" className="main-2-1-desc1">vish2004k@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;