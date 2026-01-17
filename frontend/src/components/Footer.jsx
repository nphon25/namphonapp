import "../styles/global.css";
import "../styles/Footer.css";

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [isVisible, setIsVisible] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    const email = "namphondesign@gmail.com";

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

    const copyEmailToClipboard = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
            setEmailCopied(true);
            setTimeout(() => {
                setEmailCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <footer className="page-footer">
            <Container className="footer-inner">
                <Row className="footer-top align-items-center">
                    <Col xs={12} md={6} className="footer-contact mb-3 mb-md-0">
                        <h6 className="footer-heading mb-0">
                            Let's Connect <span className="smile">:D</span>
                        </h6>
                    </Col>
                    <Col xs={12} md={6} className="footer-social d-flex justify-content-md-end justify-content-center gap-3">
                        <a href="https://www.linkedin.com/in/namphon/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <button onClick={copyEmailToClipboard} className="social-icon email-copy-btn" aria-label="Copy email" type="button">
                            <FontAwesomeIcon icon={faEnvelope} />
                            {emailCopied && <span className="copied-tooltip">Copied!</span>}
                        </button>
                         {/* Project 4 - Placeholder 
                        <a href="/path/to/your_resume.pdf" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Resume">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </a>
                        */}
                        
                    </Col>
                </Row>
                <hr className="footer-divider" />
                <Row className="footer-bottom-container align-items-center">
                    <Col xs={12} md={6} className="footer-credit text-center text-md-start mb-3 mb-md-0">
                        <p className="copyright mb-0">
                            © {currentYear} Nam Phon
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
                        <a href="#top" className={`back-to-top ${isVisible ? 'visible' : ''}`} aria-label="Back to top" onClick={scrollToTop}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;