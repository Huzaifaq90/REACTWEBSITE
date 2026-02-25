const projectList = [
  {
    title: "Creative Portfolio Website",
    text: "A bold and modern portfolio experience that highlights skills, projects, and personality with smooth, responsive UI.",
    github: "https://github.com/Huzaifaq90/hazzy.dev",
    live: "https://hazzy-dev.vercel.app/",
  },
  {
    title: "Smart Task Manager",
    text: "A productivity app with clean UX, task tracking, and fast interactions designed to help users stay focused every day.",
    github: "https://github.com/Huzaifaq90/task-manager-project",
    live: "https://task-manager-project-khaki.vercel.app/",
  },
  {
    title: "Weather-App",
    text: "A full-stack shopping platform with engaging visuals, structured product pages, and scalable architecture for growth.",
    github: "https://github.com/Huzaifaq90/Weather-API-React",
    live: "https://weather-api-module.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <p className="projects-label">Huzaifa's</p>
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">
          Real builds with clean code, responsive design, and full-stack thinking.
        </p>

        <div className="projects-grid">
          {projectList.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Vercel Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
