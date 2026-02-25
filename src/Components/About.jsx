import React from "react";
import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrap">
          <img src={profileImage} alt="Rabia Asif Ali" className="about-image" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <h3>FRONTEND DEVELOPER</h3>
          <p>
            I am Huzaifa, a passionate Full Stack Developer who builds clean,
            responsive, and user-focused web applications. I enjoy working across both
            front-end and back-end technologies to create complete digital products,
            from engaging interfaces to secure and scalable server-side solutions.
            My goal is to deliver reliable, high-performance experiences that solve
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
