import React from 'react';
import "../styles/Work.css";

const Work = () => {
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
                            Hi, I'm <span className="hero-name">Nam</span>
                        </h1>

                        <p className="hero-subtitle">
                            Graphic Designer | UX/UI & Experiential Design
                        </p>

                        <p className="hero-text">
                            I create thoughtful design that connects people, ideas, and experiences.{" "}
                            <a href="#work" className="hero-cta" onClick={handleScrollToWork}>
                                Explore my work.
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* WORK */}
            <section id="work">
                <div className="container">
                    <h2 className="work-title">My Work</h2>

                    <div className="project-grid">
                        <a href="/project/alma" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/ALMA/VID/ALMA.gif" alt="ALMA project" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">ALMA</h3>
                                <span className="project-meta">UX / UI</span>
                            </div>
                        </a>

                        <a href="/project/tp" className="project-item">
                            <div className="project-image-wrap">
                                <video autoPlay loop muted playsInline>
                                    <source src="https://res.cloudinary.com/dvo3q9yny/video/upload/v1769455666/TP_ani_mycvjy.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">TP</h3>
                                <span className="project-meta">Brand Identity</span>
                            </div>
                        </a>

                        <a href="/project/pcos" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/PCOS/pcos-mockup01.png" alt="PCOS Awareness Campaign" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">PCOS Awareness Campaign</h3>
                                <span className="project-meta">Campaign Design</span>
                            </div>
                        </a>

                        <a href="/project/sardine" className="project-item">
                            <div className="project-image-wrap">
                                <img src="/assets/sardine-splash/sardine-splash.png" alt="Sardine Splash Packaging" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">Sardine Splash</h3>
                                <span className="project-meta">Packaging Design</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;