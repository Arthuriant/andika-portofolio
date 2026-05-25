import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          
          {/* Politeknik Manufaktur Bandung - E-Commerce */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager, 3D Modeler, & Frontend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Politeknik Manufaktur Bandung</h4>
            <p>
              E-Commerce for Leather Bags, Next.js, Laravel, PostgreSQL, 3D Optimization
            </p>
          </VerticalTimelineElement>

          {/* Freelance - Cooperative Management System */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager & Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Independent Professional / Freelance</h4>
            <p>
              Cooperative Management System, Laravel, Next.js, PostgreSQL, API & Database Schema Design
            </p>
          </VerticalTimelineElement>

          {/* Politeknik Manufaktur Bandung - Document Control System */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - Feb 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager & Frontend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Politeknik Manufaktur Bandung</h4>
            <p>
              Document Control System, Laravel, MySQL, UI/UX, Backend APIs Integration
            </p>
          </VerticalTimelineElement>

          {/* PT BISA AI */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2020 - Mar 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PT BISA AI</h4>
            <p>
              Dynamic Web Interfaces, Laravel, Chat-based Application Development
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;