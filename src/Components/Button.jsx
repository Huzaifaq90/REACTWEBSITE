const ContactButton = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    if (onClick) {
      onClick();
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Move keyboard focus to first field after smooth scroll.
    window.setTimeout(() => {
      const firstInput = document.getElementById("fullName");
      if (firstInput) {
        firstInput.focus();
      }
    }, 450);
  };

  return (
    <a href="#contact" className="cta-button" onClick={handleClick}>
      Login
    </a>
  );
};

export default ContactButton;
