const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with clean code, fast loading speed, and a structure that scales as your business grows.",
  },
  {
    title: "UI/UX Design",
    description:
      "Eye-catching interfaces focused on clarity, smooth user flow, and meaningful design choices that improve engagement.",
  },
  {
    title: "Full Stack Solutions",
    description:
      "End-to-end product development from front-end experiences to secure back-end APIs, databases, and deployment.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        <p className="services-label">What I Offer</p>
        <h2>Services</h2>
        <p className="services-subtitle">
          I help brands and clients build impactful digital products with a strong
          balance of design and development.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
