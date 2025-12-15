import "../styles/global.css"
import "../styles/Footer.css"

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="page-footer">
            <Container className="footer-inner">
                {/* Top Row */}
                <Row className="footer-top align-items-center">
                    <Col xs={12} md={6} className="footer-contact mb-3 mb-md-0">
                        <h6 className="footer-heading mb-0">
                            Let's Connect <span className="smile">:D</span>
                        </h6>
                    </Col>

                    <Col xs={12} md={6} className="footer-social d-flex justify-content-md-end justify-content-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                        <a
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a
                            href="mailto:namphondesign@gmail.com"
                            className="social-icon"
                            aria-label="Email"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>

                        <a
                            href="/path/to/your_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="Resume"
                        >
                            <FontAwesomeIcon icon={faFileAlt} />
                        </a>
                    </Col>
                </Row>

                {/* Divider */}
                <hr className="footer-divider" />

                {/* Bottom Row */}
                <Row className="footer-bottom-container align-items-center">
                    <Col xs={12} md={6} className="footer-credit text-center text-md-start mb-3 mb-md-0">
                        <p className="copyright mb-0">
                            © {currentYear} Nam Phon
                        </p>
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
                        {/* Back to Top Button */}
                        <a
                            href="#top"
                            className={`back-to-top ${isVisible ? 'visible' : ''}`}
                            aria-label="Back to top"
                            onClick={scrollToTop}
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;