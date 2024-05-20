import React from "react";
import "./experience.css";

function Experience()
{
    return (
        <div className="main-2">
            <h2 className="main-2-title">Experience</h2>
            <div className="main-2-1">
                <div className="main-2-1-left">
                    <div className="main-2-1-company">
                        <img src="https://sdn.signalhire.co/storage/company/1ddf/83d0/2cbb/a919/0b70/7111/63f0/6d1a.webp" style={{width: "50px", borderRadius: "50%", padding: "5px"}} alt="logo-preview"></img>
                        <p>Google Developer Student Club</p>
                    </div>
                    <div className="main-2-1-location">
                        <p>February 2024 - Present</p>
                        <p>OMR, Chennai</p>
                    </div>
                </div>
                <div className="main-2-1-desc">
                    <p>• Led Google Developer Student Clubs (GDSC) as Machine Learning Lead for my college, fostering a vibrant community for enthusiasts, organizing workshops, and mentoring members through hands-on projects.</p>
                    <p>• Facilitated networking opportunities with industry professionals, enhancing members career prospects and fostering collaborations within the machine learning ecosystem.</p>
                    <p>• Demonstrated leadership and organizational skills by coordinating events, promoting knowledge sharing, and driving engagement in the field of machine learning within the university community.</p>
                </div>
            </div>
            <div className="main-2-1">
                <div className="main-2-1-left">
                    <div className="main-2-1-company">
                        <img src="https://media.licdn.com/dms/image/C4D0BAQFheEbgt4_U_w/company-logo_200_200/0/1661277231688/codeclause_logo?e=2147483647&v=beta&t=oaLfv8BROAFUk-_O81fbBJOU2aw-Mlgx_tvPWgVy3EE" style={{width: "50px", borderRadius: "50%", padding : "5px"}} alt="logo-preview"></img>
                        <p>Codeclause</p>
                    </div>
                    <div className="main-2-1-location">
                        <p>May 2023</p>
                        <p>Remote</p>
                    </div>
                </div>
                <div className="main-2-1-desc">
                    <p>• Completed Internship at Codeclause, solving problem statements including Churn prediction in telecom industry using logistic regression and Market basket analysis using Apriori algorithm.</p>
                    <p>• Conducted data preprocessing, feature engineering, and model training/validation processes to optimize model performance.</p>
                    <p>• Identified frequent itemsets and generated association rules to inform marketing strategies, such as cross-selling, product placement, and personalized recommendations.</p>
                </div>
            </div>
            <div className="main-2-1">
                <div className="main-2-1-left">
                    <div className="main-2-1-company">
                        <img src="https://media.licdn.com/dms/image/C4D0BAQGpfSwP2VRw0A/company-logo_200_200/0/1679645520103/collegeranker_logo?e=2147483647&v=beta&t=ES0S_utmUnurD6-cuqu5s4HDhGWsMwGtlU1t4zMQCM4" style={{width: "50px", borderRadius: "50%", padding: "5px"}} alt="logo-preview"></img>
                        <p>Twilearn Edutech</p>
                    </div>
                    <div className="main-2-1-location">
                        <p>February 2023 - March 2023</p>
                        <p>Remote</p>
                    </div>
                </div>
                <div className="main-2-1-desc">
                    <p>• Completed Internship at Twilearn, specializing in employee attrition analysis with Tableau visualization and heart disease prediction using Support Vector Machine model.</p>
                    <p>• Demonstrated adeptness in data analysis and machine learning techniques, contributing actionable insights for strategic decision-making</p>
                    <p>• Applied analytical skills to deliver impactful solutions, fostering organizational optimization and healthcare enhancement.</p>
                </div>
            </div>
        </div>
    );
}
export default Experience;