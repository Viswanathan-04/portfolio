import React from "react";
import './exp.css';
import { FaDotCircle } from "react-icons/fa";

function Experience(){
    return(
        <>
        <section id='expbtn' className='expbt'>
            <div className="explbl">
                <text className="exp-lbl"><hr></hr>Experience I have<hr></hr></text>
            </div>
            <div className="exphome">
                <div className="exp-1">
                    <text className="prog">Skills & Languages<hr color={'black'}></hr></text>   
                    <div className="exp-1-1">
                        <div className="exp-1-1-1">
                            <text className="lang">Python</text>
                            <text className="lang">Java</text>
                            <text className="lang">HTML - CSS</text>
                        </div>
                        <div className="exp-1-1-1">
                            <text className="lang">MySQL</text>
                            <text className="lang">C</text>
                            <text className="lang">Java</text>
                            <text className="lang">ReactJS</text>
                        </div>
                        <div className="exp-1-1-1">
                            <text className="lang">Data Analytics</text>
                            <text className="lang">Machine Learning</text>
                        </div>
                        <div className="exp-1-1-1">
                            <text className="lang">Statistics</text>
                            <text className="lang">Tableau</text>
                        </div>
                    </div>
                </div>
                <div className="exp-2">
                    <text className="headexp">Internships<hr color={'black'}></hr></text>
                    <div className="exp-2-1">
                        <div className="exp-2-1-1">
                            <FaDotCircle className="circle2"></FaDotCircle>
                            <p className="para2"><span className="span2">CodeClause<br></br></span><br></br>Data Science Intern (Virtual)<br></br>01 May 2023 - 31 May 2023<br></br>Python - Sklearn</p>
                        </div>
                        <div className="exp-2-1-1">
                            <FaDotCircle className="circle2"></FaDotCircle>
                            <p className="para2"><span className="span2">Twilearn <br></br></span><br></br>Data Science Intern (Virtual)<br></br>01 Feb 2023 - 31 March 2023<br></br>Python, Tableau</p>
                        </div>
                    </div>
                </div>
                <div className="exp-3">
                    <text className="cerexp">Certifications<hr color={'black'}></hr></text>
                    <div className="exp-3-1">
                        <div className="exp-3-1-1">
                            <FaDotCircle className="circle3"></FaDotCircle>
                            <p className="exp-3-txt">Business English Certificate(Vantage)</p>
                        </div>
                        <div className="exp-3-1-1">
                            <FaDotCircle className="circle3"></FaDotCircle>
                            <p className="exp-3-txt">Python Basics - Hackerrank</p>
                        </div>
                        <div className="exp-3-1-1">
                            <FaDotCircle className="circle3"></FaDotCircle>
                            <p className="exp-3-txt">MySQL Basics - Hackerrank</p>
                        </div>
                        <div className="exp-3-1-1">
                            <FaDotCircle className="circle3"></FaDotCircle>
                            <p className="exp-3-txt">Java Basics - Hackerrank</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience;