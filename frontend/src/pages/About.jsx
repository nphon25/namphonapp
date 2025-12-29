import React from 'react';
import "../styles/About.css"

const About = () => {
    return (
        <main>
            {/* ABOUT ME SECTION */}
            <section id="about-me" className="section">
                <div className="container">
                    <div className="about-layout">

                        {/* TEXT SIDE */}
                        <div className="about-info">
                            <p className="about-role">Graphic Designer | Experience-Focused  </p>

                            <h1 className="about-name">
                                Nam Phon
                                <span className="pronunciation">(naam fohn)</span>
                            </h1>

                           <p className="about-bio">
                            I’m an experience-focused graphic designer with a BFA in Graphic Design. 
                            I create clear, human-centered work by thinking about how people move through, 
                            interact with, and understand design. I’m drawn to creating memorable design systems 
                            and visual identities that feel intentional, thoughtful, and engaging. My approach is
                             grounded in curiosity, research, and strong visual storytelling.
                             </p>
                        <p className="about-bio">
                            Outside of design, you'll usually find me walking, photographing my cats, or recharging through small creative hobbies.
                        </p>


                            {/* STATS */}
                            <div className="about-stats">

                                {/* Focus */}
                                <div className="about-stat-row">
                                    <span className="about-stat-label">Focus</span>
                                    <span className="about-stat-value">
                                        Brand Identity, UX/UI, Visual Systems, Spatial & Experiential Graphic Design
                                    </span>
                                </div>

                                {/* Design Skills */}
                                <div className="about-stat-row">
                                    <span className="about-stat-label">Design Skills</span>
                                    <span className="about-stat-value">
                                        Brand Strategy, Logo Design, Editorial & Layout Design, Motion Design, Content Creation
                                    </span>
                                </div>

                                {/* Technical Skills */}
                                <div className="about-stat-row">
                                    <span className="about-stat-label">Technical Skills</span>
                                    <span className="about-stat-value">
                                        Illustrator, Photoshop, InDesign, After Effects, Premiere Pro, Dreamweaver,
                                        Figma, HTML/CSS (basic), Blender
                                    </span>
                                </div>

                            </div>
                        </div> {/* /.about-info */}

                        {/* VIDEO SIDE */}
                        <div className="about-photo">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label="Introduction video of Nam Phon"
                            >
                                <source src="src/assets/vid/logo (2).mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div> {/* /.about-layout */}
                </div> {/* /.container */}
            </section>
        </main>
    );
};

export default About;