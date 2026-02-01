import React, { useState, useEffect } from "react";

const ScrollSpy = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrollspy should be sticky (has scrolled past initial position)
      const scrollspyElement = document.querySelector('.scrollspy-nav');
      if (scrollspyElement) {
        const rect = scrollspyElement.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }

      // Find the active section
      const scrollPosition = window.scrollY + 90; // Offset for scrollspy height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -76; // Scrollspy height only
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className={`scrollspy-nav ${isSticky ? 'is-sticky' : ''}`}>
      <div className="scrollspy-nav-inner">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`scrollspy-link ${activeSection === section.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ScrollSpy;