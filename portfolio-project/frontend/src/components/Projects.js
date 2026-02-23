import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Nourish Together",
    description: "A platform dedicated to fighting hunger and reducing food waste. It connects food donors, like restaurants, with people in need, enabling easy sharing and distribution of surplus food.",
    image: "/NourishTogether.png",
    githubUrl: "https://github.com/Nikitadhotre/Nourish_Together",
    liveUrl: "https://nourish-together.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Full Stack Developer Portfolio – Showcasing projects and skills in web and mobile development, including React, Node.js, and database management, with a focus on creating impactful, real-world applications.",
    image: "/Portfolio.png",
    githubUrl: "https://github.com/akanshajawle/portfolio",
    liveUrl: "https://akansha-jawle.vercel.app",
  },
  {
    id: 3,
    title: "VidhanVerse",
    description: "It is an Mobile Application. An educational platform that makes learning about laws, governance, and civic rights engaging and accessible through interactive content and real-world examples.",
    image: "/VidhanVerse.jpg",
    githubUrl: "https://github.com/akansha-jawle/vidhanverse",
    liveUrl: "https://vidhanverse.app",
  },
  {
    id: 4,
    title: "SplitBill",
    description: "A mobile application for splitting bills and managing expenses with friends and groups. Features include expense tracking, settlement calculations, and group management.",
    image: "/VidhanVerse.jpg",
    githubUrl: "https://github.com/akansha-jawle/splitbill",
    liveUrl: "https://splitbill.app",
  },
];

// Inline SVGs with color adaptivity
const GithubIcon = ({ color = "white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={color} viewBox="0 0 24 24">
    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LiveIcon = ({ color = "white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={color} viewBox="0 0 24 24">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="icon" />
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live-link"
                  title="View Live Project"
                >
                  <LiveIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}