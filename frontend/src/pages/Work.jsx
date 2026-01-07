import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Work.css"
import almaGif from "../assets/ALMA/ALMA.gif";


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
                      <section id="hero">
                    <div className="container">
                        <h1 className="hero-title">
                            Hi, I'm <span className="hero-name">Nam :D</span>
                        </h1>

                       <p className="hero-subtitle">
                        Graphic Designer | UX/UI & Experiential Design
                        </p>

                        <p className="hero-text">
                            I create thoughtful design that connects people, ideas, and experiences.{' '}
                            <a href="#work" className="scroll-link hero-cta" onClick={handleScrollToWork}>
                                Explore my work.
                            </a>
                        </p>
                    </div>
                </section>


            {/* WORK SECTION */}
            <section id="work">
                <div className="container">
                    <h2 className="work-title">My Work</h2>
                    <p className="work-subtitle">
                    </p>

                    <div className="project-grid">

                        {/* Project 1 - ALMA */}
                        <a href="/project/alma" className="project-item">
                            <div className="project-image-wrap">
                                <img src="src\assets\ALMA\ALMA.gif" alt="ALMA" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">ALMA</h3>
                                <p className="project-meta">Community-based UX/UI</p>
                            </div>
                        </a>

                        {/* Project 2 - PCOS Awareness Campaign */}
                        <a href="/project/pcos" className="project-item">
                            <div className="project-image-wrap">
                                <img src="src/assets/PCOS/Main Mockup.jpg" alt="PCOS Awareness Campaign" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">PCOS Awareness Campaign</h3>
                                <p className="project-meta">Campaign Design · Charlotte, NC</p>
                            </div>
                        </a>
                     {/* Project 3 - n */}
                        <a href="#" className="project-item">
                            <div className="project-image-wrap">
                                <img src="src/assets/PCOS Awareness/assets/M003T0985 Signage Mockup 30Oct23.jpg" alt="PCOS Awareness Campaign" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">PCOS Awareness Campaign</h3>
                                <p className="project-meta">Campaign Design · Charlotte, NC</p>
                            </div>
                        </a>
                         {/* Project 4 - */}
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