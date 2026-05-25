import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "PHP",
    "Laravel",
    "Tailwind",
    "MySQL",
    "PostgreSQL"
];

const labelsSecond = [
    "C++",
    "Python",
    "Arduino IDE",
    "ESP8266",
    "IoT Systems",
    "Firebase",
    "Docker"
];

const labelsThird = [
    "GitHub",
    "Git",
    "Trello",
    "Notion",
    "Agile/Scrum",
    "Team Coordination"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* Pillar 1: Full-Stack */}
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Web Development</h3>
                    <p>I have experience in building end-to-end web applications, industrial management systems, and interactive e-commerce platforms. I focus on designing structured technological solutions that bridge client business needs with an optimal user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Pillar 2: IoT & Embedded Systems */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>IoT & Embedded Systems</h3>
                    <p>I design and build automated prototypes based on IoT for real-time object monitoring and classification. My expertise includes implementing control logic in C++ firmware and integrating hardware systems with real-time databases for industrial visibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Pillar 3: Team Collaboration & Version Control */}
                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Team Collaboration & Version Control</h3>
                    <p>I thrive in collaborative environments, actively leveraging GitHub for version control, code reviews, and maintaining comprehensive project documentation. I have a strong track record of coordinating closely with mentors, project partners, and cross-functional teams to ensure smooth workflows and successful project delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Practices:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;