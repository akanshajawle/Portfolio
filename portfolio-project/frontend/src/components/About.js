import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Education data
const education = [
  {
    id: 1,
    degree: 'Secondary School Certificate (10th)',
    school: 'Dyanesh Vidya Mandir',
    year: '2019 - 2020',
    percentage: '92.60%',
    description: 'Completed 10th standard with distinction in Science and Mathematics.',
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (12th)',
    school: 'Vivekanand College',
    year: '2021 - 2022',
    percentage: '92%',
    description: 'Completed 12th standard in Science stream with Physics, Chemistry, Biology, and Mathematics.',
  },
  {
    id: 3,
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Your University',
    year: '2022 - 2026',
    percentage: 'CGPA: 8.5',
    description: 'Currently pursuing B.Tech in Computer Science and Engineering.',
  },
];

// Experience data
const experience = [
  {
    id: 1,
    company: 'FarmEasy',
    role: 'Backend Developer',
    duration: 'September 2025 - Present',
    description: 'Working as a Backend Developer, building and maintaining REST APIs for agricultural management systems. Developing server-side logic and database integrations.',
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Passionate About Building Amazing Things</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="about-profile-image"
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Full Stack Developer with a Passion for Innovation</h3>
            <p>
              Hello! I am a Computer Science student and aspiring full-stack developer with a deep interest in backend technologies, API development, and application architecture. 
              I enjoy building complete solutions — from designing databases, developing RESTful APIs, and implementing server-side logic to creating intuitive and responsive user interfaces. 
            </p>
            <p>
              I am driven by curiosity and enjoy understanding how systems operate, scale, and handle real-world challenges. 
              I appreciate clean code, thoughtful design, and efficient problem-solving. My objective is to grow as a developer while contributing to innovative and meaningful projects.
            </p>

            <div className="about-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>India</span>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>akanshajawle@example.com</span>
              </div>
              <div className="info-item">
                <i className="fas fa-briefcase"></i>
                <span>Available for freelance</span>
              </div>
            </div>

            <a 
              href="/resume.pdf" 
              className="btn btn-primary"
              download
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Education Section - Timeline Style */}
        <div className="education-section">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-subtitle">Education</span>
            <h2 className="section-title">My Academic Journey</h2>
          </motion.div>

          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <span className="timeline-year">{edu.year}</span>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.school}</h4>
                    <div className="timeline-grade">
                      <i className="fas fa-star"></i>
                      <span>{edu.percentage}</span>
                    </div>
                    <p>{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        {experience.length > 0 && (
          <div className="experience-section">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-subtitle">Experience</span>
              <h2 className="section-title">My Professional Journey</h2>
            </motion.div>

            <div className="experience-list">
              {experience.map((exp) => (
                <motion.div 
                  key={exp.id}
                  className="experience-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="experience-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="experience-content">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <span className="experience-duration">{exp.duration}</span>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
