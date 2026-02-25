const skills = [
  { name: "React.js", level: "Advanced", color: "skill-react" },
  { name: "JavaScript", level: "Advanced", color: "skill-js" },
  { name: "HTML5", level: "Expert", color: "skill-html" },
  { name: "CSS3", level: "Advanced", color: "skill-css" },
  { name: "Node.js", level: "Intermediate", color: "skill-node" },
  { name: "Git & GitHub", level: "Advanced", color: "skill-git" },
  { name: "Responsive Design", level: "Expert", color: "skill-rwd" },
  { name: "UI/UX Basics", level: "Intermediate", color: "skill-uiux" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="skills-label">My Toolkit</p>
        <h2>Skills</h2>
        <p className="skills-subtitle">
          I build fast, modern, and beautiful web experiences using clean code
          and user-focused design.Web developer passionate about creating minimal, high-performance websites using modern technologies and clean design principles.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className={`skill-card ${skill.color}`} key={skill.name}>
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
