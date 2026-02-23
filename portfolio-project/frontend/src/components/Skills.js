import React from "react";
import "./Skills.css";

const skills = [
  // Programming Languages
  { name: "JavaScript", category: "languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", category: "languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", category: "languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", category: "languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SQL", category: "languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  // Framework and Library
  { name: "React", category: "frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", category: "frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", category: "frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  // Databases
  { name: "MongoDB", category: "databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", category: "databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", category: "databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

  // Tools
  { name: "Git", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "VS Code", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Leadership"
];

export default function Skills() {
  const languagesSkills = skills.filter(skill => skill.category === "languages");
  const frameworksSkills = skills.filter(skill => skill.category === "frameworks");
  const databasesSkills = skills.filter(skill => skill.category === "databases");
  const toolsSkills = skills.filter(skill => skill.category === "tools");

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="skills-title">Skills & Technologies</h2>

        <div className="skills-wrapper">
          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-box">
              {languagesSkills.map(skill => (
                <div key={skill.name} className="skills-item">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Framework & Library</h3>
            <div className="skills-box">
              {frameworksSkills.map(skill => (
                <div key={skill.name} className="skills-item">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Databases</h3>
            <div className="skills-box">
              {databasesSkills.map(skill => (
                <div key={skill.name} className="skills-item">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-box">
              {toolsSkills.map(skill => (
                <div key={skill.name} className="skills-item">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-box">
              {softSkills.map(skill => (
                <div key={skill} className="skills-item">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
