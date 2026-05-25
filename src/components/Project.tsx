import React from "react";
import project01 from '../assets/images/project01.png';
import project02 from '../assets/images/project02.png';
import project03 from '../assets/images/project03.png';
import project04 from '../assets/images/project04.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={project01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Tensen - Central Tendency Calculator Website</h2></a>
                <p>Developed a smart calculator web application featuring step-by-step solutions and graphical visualizations using Next.js and Python collaboratively. Designed a modern and user-friendly UI/UX to make statistical data easily understandable for users of all ages.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={project02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>O-Man - Manufacturing Production Monitoring</h2></a>
                <p>Built an end-to-end manufacturing production management system in real-time using React and JavaScript. Implemented integrated monitoring features to directly process data from the ordering stage to the finished product.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={project03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Neuro - Autism Symptom Detection Expert System</h2></a>
                <p>Built an autism symptom detection expert system using Tailwind, Python, and Docker to ensure application stability across various environments. Accurately translated the medical parameters knowledge base into programming logic structures.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={project04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Smart Box Monitoring and Classification System</h2></a>
                <p>Designed and built an automated conveyor prototype based on loT using ESP8266 for real-time object detection and classification. Integrated the system with Firebase Realtime Database to synchronize production metric data and built an interactive monitoring dashboard for industrial logistics visibility. Implemented control logic in C++ firmware to synchronize infrared sensors and DC motor actuators to support industrial automation optimization.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;