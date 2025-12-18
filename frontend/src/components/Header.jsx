import "../styles/Header.css";
import "../styles/global.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../assets/SVG/Asset 1.svg";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((v) => !v);
  const handleClose = () => setExpanded(false);

  return (
    <header className="site-header">
      <Navbar expand="md" expanded={expanded} className="py-0">
        <Container className="nav-inner">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="nav-logo" onClick={handleClose}>
            <img src={logo} alt="Nam Phon Logo" />
          </Navbar.Brand>

          {/* Custom Hamburger Toggle */}
          <button
            className={`nav-toggle d-md-none ${expanded ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={expanded}
            aria-controls="primary-menu"
            onClick={handleToggle}
            type="button"
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>

          {/* Desktop Links */}
          <Nav className="ms-auto nav-links d-none d-md-flex">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Work</Nav.Link>
            <Nav.Link as={Link} to="/play" onClick={handleClose}>Play</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
          </Nav>

          {/* Mobile Overlay Menu */}
          <div
            className={`nav-overlay d-md-none ${expanded ? "is-open" : ""}`}
            role="navigation"
            aria-label="Primary"
            id="primary-menu"
          >
            <button
              className="nav-overlay-close"
              aria-label="Close menu"
              onClick={handleClose}
              type="button"
            >
              <span></span>
              <span></span>
            </button>

            <Nav className="nav-overlay-links flex-column">
              <Nav.Link as={Link} to="/" onClick={handleClose}>Work</Nav.Link>
              <Nav.Link as={Link} to="/play" onClick={handleClose}>Play</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
