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
                            <p className="about-role">Graphic Designer | UX/UI & Experiential Design </p>

                            <h1 className="about-name">
                                Nam Phon
                                <span className="pronunciation">(naam fohn)</span>
                            </h1>

                            <p className="about-bio">
                            I’m a graphic designer with a BFA in Graphic Design, based in Charlotte, NC. I’m fascinated by how people engage with design and how visuals and interfaces
                            help people understand, interact with, and connect to ideas. 
                            With a strong foundation in graphic design, I'm focusing on creating thoughtful and human centered experiences.
                            </p>

                            <p className="about-bio">
                           I have experience across print and digital design through freelancing and internships, 
                           and I’m learning front end development to better understand how designs move from concept to implementation, 
                           including designing and coding this portfolio with the help of a developer friend. 
                           I’m currently seeking opportunities in UX/UI or experiential design and hoping to join a team that values curiosity, 
                           collaboration, and human centered thinking.
                            </p>

                            <p className="about-bio">
                            In my spare time, I enjoy photographing my cats, exploring new music, watching films, 
                            cathing up on the One Piece manga or recharging through small creative hobbies. </p>







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