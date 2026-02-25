import React from "react";
import profileImage from "../assets/profile.png";


const Hero = () => {
  const handleViewWork = () => {
    const repoLinks = [
      "https://github.com/RabiaAsifAli/Task-Manager",
      "https://github.com/RabiaAsifAli/Weather-App",
    ];

    repoLinks.forEach((link) => {
      window.open(link, "_blank", "noopener,noreferrer");
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">
          <img src={profileImage} alt="" className="hero-image" />
          <p className="left-text">
            Passionate Full Stack Developer crafting modern and modern web experiences.
          </p>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <h1>Hi, I'm <span>Huzaifa</span></h1>
          <p className="right-text">
            I specialize in building responsive and scalable web applications 
            using modern technologies.I design and develop modern web applications with a strong focus on simplicity, performance, and usability. My goal is to create intuitive interfaces that deliver seamless user experiences across all devices.
          </p>
          <button type="button" className="hero-btn" onClick={handleViewWork}>
            View My Work
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
