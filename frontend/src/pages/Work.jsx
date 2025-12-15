import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Work.css"

const Work = () => {
    const navigate = useNavigate();
    const handleScrollToWork = (e) => {
        e.preventDefault();
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* HERO SECTION */}
            <section id="hero">
                <div className="container">
                    <h1 className="hero-title">
                        Hi, I'm <span className="hero-name">Nam :D</span>
                    </h1>

                    <p className="hero-subtitle">Graphic & UX UI Designer</p>

                    <p className="hero-text">
                        Delivering creative solutions with style, I design strategic visual and digital experiences that elevate brands, improve clarity, and engage real audiences from concept to execution. Check out my{' '}
                        <a href="#work" className="scroll-link" onClick={handleScrollToWork}>
                            work
                        </a>{' '}
                        or learn more{' '}
                        <Link to="/about" className="inline-link">
                            about me here
                        </Link>
                        .
                    </p>
                </div>
            </section>

            {/* WORK SECTION */}
            <section id="work">
                <div className="container">
                    <h2 className="work-title">My Work</h2>
                    <p className="work-subtitle">
                        Where pixels meet purpose: my design highlights.
                    </p>

                    <div className="project-grid">
                        {/* Project 1 - Asset Mapping Tools */}
                        <a href="#" className="project-item">
                            <div className="project-image-wrap">
                                <img src="src/assets/ALMA/Assets/Mock Up Area.png" alt="Asset Mapping Tools" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">Asset Mapping Tools</h3>
                                <p className="project-meta">Community-based UX/UI</p>
                            </div>
                        </a>

                        {/* Project 2 - PCOS Awareness Campaign */}
                        <a href="#" className="project-item">
                            <div className="project-image-wrap">
                                <img src="src/assets/PCOS Awareness/assets/M003T0985 Signage Mockup 30Oct23.jpg" alt="PCOS Awareness Campaign" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">PCOS Awareness Campaign</h3>
                                <p className="project-meta">Campaign Design · Charlotte, NC</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;