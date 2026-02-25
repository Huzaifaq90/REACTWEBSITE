const blogPosts = [
  {
    title: "Countdown Project: Time-Based UI Logic",
    excerpt:
      "This project focuses on accurate timer behavior, clear state updates, and a simple interface for countdown interactions.",
    link: "https://github.com/Huzaifaq90/countdown-project",
  },
  {
    title: "Calculator Project: Clean Math Experience",
    excerpt:
      "A responsive calculator build with practical button layout, input handling, and smooth user flow for daily calculations.",
    link: "https://github.com/Huzaifaq90/calculator-project",
  },
  {
    title: "Weather App: Real-Time Forecast Interface",
    excerpt:
      "This weather app demonstrates API integration, real-time data rendering, and a user-friendly forecast presentation.",
    link: "https://github.com/Huzaifaq90/Weather-API-module",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <p className="blog-label">Insights by HUZAIFA</p>
        <h2>Latest Blog Notes</h2>
        <p className="blog-subtitle">
          Each blog card highlights the exact project linked below, so title and
          description match the repository you open.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={post.link} target="_blank" rel="noreferrer">
                Open Project Link
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
