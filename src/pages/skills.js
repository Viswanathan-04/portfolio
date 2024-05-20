import React from "react";
import "./skills.css";

function Skills()
{
    return (
        <div className="main-3">
            <h2>Skills</h2>
            <div className="main-3-1">
                <p className="main-3-1-title">Programming Languages</p>
                <div className="main-3-1-content">
                    <p className="main-3-1-label">Python</p>
                    <p className="main-3-1-label">Java</p>
                    <p className="main-3-1-label">C - Basic</p>
                    <p className="main-3-1-label">MySQL</p>
                    <p className="main-3-1-label">ReactJS</p>
                    <p className="main-3-1-label">Flask</p>
                    <p className="main-3-1-label">HTML - CSS</p>
                    <p className="main-3-1-label">PowerBI</p>
                    <p className="main-3-1-label">Tableau</p>
                    <p className="main-3-1-label">Flutter</p>
                    <p className="main-3-1-label">MongoDB</p>
                </div>
            </div>
            <h2>Achievements</h2>
            <div className="main-3-1">
                <p className="main-3-1-title">Smart India Hackathon 2023</p>
                <div className="main-3-1-content">
                    <p className="main-3-2-label">• Developed a robust solution to predict tree height that are lying beneath power transmission lines and alert the ministry of power when the trees are about to colide with the transmission lines</p>
                </div>
            </div>
            <div className="main-3-1">
                <p className="main-3-1-title">VIZ-A-THON 2023</p>
                <div className="main-3-1-content">
                    <p className="main-3-2-label">• Conquered the second place in VIZ-A-THON competition organised by IEEE club in St. Joseph's College of Engineering. Designed a PowerBI dashboard which showcased the data analysis of Netflix user data</p>
                </div>
            </div>
            <div className="main-3-1">
                <p className="main-3-1-title">Other Achievements</p>
                <div className="main-3-1-content">
                    <p className="main-3-2-label">• Leetcode - 450+ Problems</p>
                    <p className="main-3-2-label">• Skillrack - 1000+ Medals</p>
                    <p className="main-3-2-label">• Hackerrank - 6795 Hackos </p>
                </div>
            </div>
        </div>
    );
}
export default Skills;