const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="contact-label">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="contact-subtitle">
          Have a project idea or collaboration in mind? Send me a message.
        </p>

        <form className="contact-form">
          <div className="contact-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="Enter your email address" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" placeholder="Write your message..." />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
