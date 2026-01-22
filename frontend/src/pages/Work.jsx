import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Work.css";

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
            {/* HERO */}
            <section id="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            a brand + UI designer driven by storytelling visuals that speak to the heart
                            and activate the <span className="hero-outline">mind.</span>
                        </h1>

                        <div className="hero-text-row">
                            <p className="hero-text">
                                I create thoughtful design that connects people, ideas, and experiences.
                            </p>

                            <a
                                href="#work"
                                className="hero-circle-cta"
                                onClick={handleScrollToWork}
                                aria-label="Explore my work"
                            >
                                <span>
                                    Explore<br />my work
                                </span>
                            </a>
                        </div>
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
                        <a href="/project/alma" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/ALMA/VID/ALMA.gif" alt="ALMA" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">ALMA</h3>
                                <p className="project-meta">UX/UI</p>
                            </div>
                        </a>

                        <a href="/project/pcos" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/PCOS/pcos-mockup01.png" alt="PCOS Awareness Campaign" loading="lazy" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">PCOS Awareness Campaign</h3>
                                <p className="project-meta">Campaign Design</p>
                            </div>
                        </a>

                        <a href="/project/tp" className="project-item">
                            <div className="project-image-wrap">
                                <video
                                    src="/assets/TP/TP ani.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">TP</h3>
                                <p className="project-meta">Brand Identity</p>
                            </div>
                        </a>

                        <a href="/project/sardine" className="project-item">
                            <div className="project-image-wrap">
                                <img
                                    src="/assets/sardine-splash/sardine-splash.png"
                                    alt="Sardine Splash"
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
