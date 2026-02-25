import client1 from "../assets/client 1.webp";
import client2 from "../assets/client 2.webp";
import client3 from "../assets/client 3.webp";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Startup Founder",
    image: client1,
    text: "Huzaifa has just delivered excellent quality, clean UI, and a website that feels premium and fast.",
    variant: "square",
  },
  {
    name: "Daniel Reed",
    role: "Product Manager",
    image: client2,
    text: "Smooth process from planning to launch. Great communication, on-time delivery, and polished execution.",
    variant: "square",
  },
  {
    name: "Sana Malik",
    role: "E-commerce Owner",
    image: client3,
    text: "Excellent full stack work with thoughtful UX. Our store now feels easier, faster, and more professional for customers.",
    variant: "wide",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="testimonial-container">
        <p className="testimonial-label">Client Feedback</p>
        <h2> Reviews</h2>
        <p className="testimonial-subtitle">
          Real words from clients who trusted my process, design quality, and
          development standards.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article
              className={`testimonial-card ${item.variant === "wide" ? "testimonial-card-wide" : ""}`}
              key={item.name}
            >
              <div className="client-row">
                <img
                  src={item.image}
                  alt={item.name}
                  className="client-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = client1;
                  }}
                />
                <div className="client-meta">
                  <h3>{item.name}</h3>
                  <p className="client-role">{item.role}</p>
                </div>
              </div>
              <p className="review-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
