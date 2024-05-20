import React, { useState, useEffect } from "react";
import "./projects.css";
import axios from 'axios';
import { FaEye, FaFolder, FaLanguage, FaExclamationCircle } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

function Projects() {
    const [data1, setData1] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users/Viswanathan-04/repos")
        .then(response => {
            setData1(response.data);
        })
        .catch(error => {
            setData1("Error Connecting to Network")
        });
    });

    return (
        <div className="main-4">
            <div className="more">
                <h2 className="main-4-title" style={{marginLeft: "10px"}}>Projects Done</h2>
                <a className="more-btn" href="https://github.com/Viswanathan-04?tab=repositories">See More</a>
            </div>
            <div className="projects">
            {data1!=="Error Connecting to Network" ? data1.slice(3,11).map(repo => (
                <div key={repo.id} className="main-4-1"> 
                    <div className="project">
                        <div className="project-title">
                            <FaFolder style={{color: "var(--primary-text-color)", fontSize: "20px"}}/>
                            <a href={repo.html_url} style={{color: "var(--tertiary-text-color)", textDecoration: "none", fontSize: "20px"}}>{repo.name}</a>
                        </div>
                        <div>
                            <p style={{color: "var(--tertiary-text-color)"}}>{repo.updated_at.slice(0,10)}</p>
                        </div>
                    </div>
                    <div className="watchers">
                        <div className="watchers-1">
                            <FaEye style={{color: "var(--secondary-text-color"}}/>
                            <div style={{color: "var(--tertiary-text-color)"}}>{repo.watchers}</div>
                        </div>
                        <div className="watchers-1">
                            <FaCodeFork style={{color: "var(--secondary-text-color"}}/>
                            <div style={{color: "var(--tertiary-text-color)"}}>{repo.forks_count}</div>
                        </div>
                        <div className="watchers-1">
                            <FaLanguage style={{color: "var(--secondary-text-color"}}/>
                            <div style={{color: "var(--tertiary-text-color)"}}>{repo.language!=null ? repo.language : '-'}</div>
                        </div>
                    </div>
                </div>
            )): 
                <div className="main-4-1">
                    <FaExclamationCircle className="exclaimation"/>
                    <h2 className="main-4-2-title" style={{textAlign: "center"}}>{data1}</h2>
                </div>}
            </div>
        </div>
    );
}

export default Projects;
