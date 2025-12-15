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
                            <p className="about-role">Graphic & UX/UI Designer</p>

                            <h1 className="about-name">
                                Nam Phon
                                <span className="pronunciation">(naam fohn)</span>
                            </h1>

                            <p className="about-bio">
                                I'm a graphic designer shaping clear, human-centered work. I look at the human experience when creating thoughtful design solutions, and I'm drawn to where digital and spatial design intersect. My approach is intentional and guided by curiosity, research, and the desire to craft meaningful narratives.
                            </p>

                            <p className="about-bio">
                                Outside of design, you'll usually find me walking, photographing the world around me, or recharging through small creative hobbies.
                            </p>

                            <p className="about-bio">
                                About my logo: The folder represents the experiences, knowledge, and curiosity I carry, and the pen tool symbolizes the creative power I channel into the world. I believe design is a language of connection, and it's what keeps the world moving.
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