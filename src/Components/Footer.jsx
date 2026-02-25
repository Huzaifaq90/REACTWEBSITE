import { useEffect, useState } from "react";

const PRIMARY_SECTIONS = new Set(["home", "projects", "testimonial"]);

const Footer = () => {
  const [usePrimaryTheme, setUsePrimaryTheme] = useState(true);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const updateFooterTheme = () => {
      const triggerY = 140;
      let activeId = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          activeId = section.id;
          break;
        }
      }

      setUsePrimaryTheme(PRIMARY_SECTIONS.has(activeId));
    };

    updateFooterTheme();
    window.addEventListener("scroll", updateFooterTheme, { passive: true });
    window.addEventListener("resize", updateFooterTheme);

    return () => {
      window.removeEventListener("scroll", updateFooterTheme);
      window.removeEventListener("resize", updateFooterTheme);
    };
  }, []);

  return (
    <footer
      className={`site-footer ${
        usePrimaryTheme ? "footer-theme-primary" : "footer-theme-header"
      }`}
    >
      <div className="footer-container">
        <p>@Hazzy.Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
