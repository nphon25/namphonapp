import React from 'react';
import "../styles/About.css";

const About = () => {
    return (
        <main>
            {/* ABOUT ME */}
            <section id="about-me" className="section">
                <div className="container">
                    <div className="about-layout">

                        {/* TEXT */}
                        <div className="about-info">

                            <h1 className="about-name">
                                Nam Phon
                                <span className="pronunciation">(naam fohn)</span>
                            </h1>

                            <p className="about-bio">
                                Hi, I’m a graphic designer based in Charlotte, NC. I’m drawn to
                                how design creates connection and brings people together by
                                linking ideas, communities, and culture. I enjoy creating work
                                that feels intentional and leaves a lasting impression.
                            </p>

                            <p className="about-bio">
                                My process is flexible and human centered, shaped by the needs
                                of each project. I work across digital and physical spaces,
                                adjusting my approach based on context, scale, and audience.
                                Storytelling guides how I think and design, helping ideas feel
                                clearer and more meaningful.
                            </p>

                            <p className="about-bio">
                                I’m currently seeking opportunities in UX/UI or experiential
                                design with teams that value curiosity, collaboration, and
                                thoughtful problem solving. Outside of design, I enjoy
                                photographing my cats, catching up on One Piece, and spending
                                time on small creative projects.
                            </p>

                            {/* STATS */}
                            <div className="about-stats">

                                <div className="about-stat-row">
                                    <span className="about-stat-label">Focus</span>
                                    <span className="about-stat-value">
                                        Brand Identity, UX/UI, Visual Systems,
                                        Spatial and Experiential Design
                                    </span>
                                </div>

                                <div className="about-stat-row">
                                    <span className="about-stat-label">Design Skills</span>
                                    <span className="about-stat-value">
                                        Brand Strategy, Visual Storytelling,
                                        Editorial and Layout Design,
                                        Motion Design, Content Creation
                                    </span>
                                </div>

                                <div className="about-stat-row">
                                    <span className="about-stat-label">Technical Skills</span>
                                    <span className="about-stat-value">
                                        Illustrator, Photoshop, InDesign,
                                        After Effects, Premiere Pro,
                                        Figma, HTML and CSS basic, Blender
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* VIDEO */}
                        <div className="about-photo">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label="Introduction video of Nam Phon"
                            >
                                <source
                                    src="https://res.cloudinary.com/dvo3q9yny/video/upload/v1769459470/logo_lv2y3g.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
