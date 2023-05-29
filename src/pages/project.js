import React from "react";
import './project.css';
import { FaArrowAltCircleRight, FaLocationArrow } from "react-icons/fa";

function Project(){
    return(
        <>
        <section id='projbtn' className='projbt'>
            <div className="prolbl">
                <text className="pro-lbl"><hr></hr>Projects I've Done<hr></hr></text>
            </div>
            <div className="prohome">
                <div className="pro-1">
                    <div className="pro-1-1">
                        <p className="circle4"><FaArrowAltCircleRight></FaArrowAltCircleRight></p>
                        <p className="txt-1">Churn Prediction in Telecom Industry using Logistic Regression<br></br>(Associated with CodeClause)</p>
                    </div>
                    <a className="redir" href="https://github.com/Viswanathan-04/Telecom-Churn-Prediction">Show Project <FaLocationArrow className="arrow1"></FaLocationArrow></a>
                    <div className="pro-1-2">
                        <text className="txt-2">Description:</text>
                        <p className="txt-3">Analysed Churn rate in Telecom Industry using Logistic Regression with the help of numpy, pandas, sci-kit learn, matplotlib, seaborn modules of Python</p>
                    </div>
                </div>
                <div className="pro-1">
                    <div className="pro-1-1">
                        <p className="circle4"><FaArrowAltCircleRight></FaArrowAltCircleRight></p>
                        <p className="txt-1">Employee Attrition Analysis<br></br>(Associated with Twilearn)</p>
                    </div>
                    <a className="redir" href="https://github.com/Viswanathan-04/Employee-Attrition">Show Project <FaLocationArrow className="arrow1"></FaLocationArrow></a>
                    <div className="pro-1-2">
                        <text className="txt-2">Description:</text>
                        <p className="txt-3">Created a Tableau dashboard and analysed the reason for employee attrition for a given dataset which include multiple sheets in the dashboard denoting various graphs.</p>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default Project;