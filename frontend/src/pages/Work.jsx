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
            <section id="hero">
                <div className="hero-background">
                    <div className="hero-shape hero-shape-1"></div>
                    <div className="hero-shape hero-shape-2"></div>
                    <div className="hero-shape hero-shape-3"></div>
                    <div className="hero-shape hero-shape-4"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="hero-name">Nam</span>
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
                </div>
            </section>

            {/* WORK SECTION */}
            <section id="work">
                <div className="container">
                    <h2 className="work-title">My Work</h2>
                    <p className="work-subtitle">
                        Selected projects showcasing my approach to design
                    </p>

                    <div className="project-grid">
                        {/* Project 1 - ALMA */}
                        <a href="/project/alma" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/ALMA/VID/ALMA.gif" alt="ALMA" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">ALMA</h3>
                                <p className="project-meta">UX/UI</p>
                            </div>
                        </a>

                        {/* Project 2 - PCOS Awareness Campaign */}
                        <a href="/project/pcos" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/PCOS/pcos-mockup01.png" alt="PCOS Awareness Campaign" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">PCOS Awareness Campaign</h3>
                                <p className="project-meta">Campaign Design</p>
                            </div>
                        </a>

                        {/* Project 3 - TP */}
                        <a href="/project/tp" className="project-item">
                            <div className="project-image-wrap">
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    preload="auto"
                                    onError={(e) => console.error('TP video failed to load:', '/assets/TP/TP_ani.mp4', e)}
                                >
                                    <source src="https://res.cloudinary.com/dvo3q9yny/video/upload/v1769455666/TP_ani_mycvjy.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* <img src="/assets/TP/TP_ani.gif" alt="TP Brand Identity" loading="lazy" /> */}

                            </div>
                            <div className="project-info">
                                <h3 className="project-title">TP</h3>
                                <p className="project-meta">Brand Identity</p>
                            </div>
                        </a>

                        {/* Project 4 - Sardine Splash */}
                        <a href="/project/sardine" className="project-item">
                            <div className="project-image-wrap">
                                <img
                                    src="/assets/sardine-splash/sardine-splash.png"
                                    alt="Packaging"
                                    loading="lazy"
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">Sardine Splash</h3>
                                <p className="project-meta">Packaging Design</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;