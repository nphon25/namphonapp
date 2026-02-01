import "../styles/Header.css";
import "../styles/global.css";

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setExpanded((v) => !v);
  
  const handleClose = () => setExpanded(false);

  // Toggle body class when menu opens/closes
  useEffect(() => {
    if (expanded) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [expanded]);

  const handleWorkClick = (e) => {
    e.preventDefault();
    handleClose();

    // If already on home page, just scroll
    if (location.pathname === '/') {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page, then scroll
      navigate('/');
      setTimeout(() => {
        const workSection = document.getElementById('work');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="site-header">
      <Navbar expand="md" expanded={expanded} className="py-0">
        <Container>
          {/* Logo - Links to Home Page */}
          <Navbar.Brand as={Link} to="/" className="nav-logo" onClick={handleClose}>
            <img src="/assets/SVG/Asset 1.svg" alt="Nam Phon Logo" />
          </Navbar.Brand>

          {/* Desktop Links */}
          <Nav className="ms-auto nav-links d-none d-md-flex">
            <Nav.Link href="#work" onClick={handleWorkClick}>Work</Nav.Link>
            <Nav.Link as={Link} to="/archive" onClick={handleClose}>Archive</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
          </Nav>

          {/* Custom Hamburger Toggle - ONLY ONE BUTTON */}
          <button
            className={`nav-toggle ${expanded ? "is-open" : ""}`}
            aria-label={expanded ? "Close menu" : "Open menu"}
            aria-expanded={expanded}
            aria-controls="primary-menu"
            onClick={handleToggle}
            type="button"
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>

          {/* Mobile Overlay Menu - NO SEPARATE CLOSE BUTTON */}
          <div
            className={`nav-overlay d-md-none ${expanded ? "is-open" : ""}`}
            role="navigation"
            aria-label="Primary"
            id="primary-menu"
          >
            <Nav className="nav-overlay-links flex-column">
              <Nav.Link href="#work" onClick={handleWorkClick}>Work</Nav.Link>
              <Nav.Link as={Link} to="/archive" onClick={handleClose}>Archive</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;