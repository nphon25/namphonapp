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

<section id="hero" className="hero-seamless">
    <div className="container">
        <div className="hero-content">
            <div className="hero-intro">

                {/* Hero  */}
                <h1 className="hero-title">
                 Hi, I’m <span className="hero-name">Nam</span>
                </h1>

                <p className="hero-text">
                 A thoughtful designer who designs with intention, shaping stories into visual experiences that connect people, ideas, culture, and experiences.
                </p>
            </div>
        </div>
    </div>
</section>


            {/* WORK */}
            <section id="work" className="work-seamless">
                <div className="container">
                    <div className="project-grid">

                        <a href="/project/alma" className="project-item">
                            <div className="project-image-wrap">
                                <img
                                    src="/assets/ALMA/VID/ALMA.gif"
                                    alt="ALMA UX and UI project"
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">ALMA</h3>
                                <span className="project-meta">
                                    UX UI
                                </span>
                            </div>
                        </a>

                        <a href="/project/pcos" className="project-item">
                            <div className="project-image-wrap">
                                <img
                                    src="/assets/PCOS/pcos-mockup01.png"
                                    alt="PCOS awareness campaign design"
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">
                                    PCOS Awareness 
                                </h3>
                                <span className="project-meta">
                                    Design Campaign
                                </span>
                            </div>
                        </a>


                        <a href="/project/sardine" className="project-item">
                            <div className="project-image-wrap">
                                <img
                                    src="/assets/sardine-splash/sardine-splash.png"
                                    alt="Sardine Splash packaging design"
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">
                                    Sardine Splash
                                </h3>
                                <span className="project-meta">
                                    Packaging Design
                                </span>
                            </div>
                        </a>

                         <a href="/project/tp" className="project-item">
                            <div className="project-image-wrap">
                                <video autoPlay loop muted playsInline>
                                    <source
                                        src="https://res.cloudinary.com/dvo3q9yny/video/upload/v1769455666/TP_ani_mycvjy.mp4"
                                        type="video/mp4"/>
                                </video>

                            </div>
                            <div className="project-info">
                                <h3 className="project-title">TP</h3>
                                <span className="project-meta">
                                    Brand Identity
                                </span>
                            </div>
                        </a>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
