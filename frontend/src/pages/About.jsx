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
                            I’m a graphic designer with a BFA in Graphic Design, based in Charlotte, NC. I’m drawn to how design forms connections and brings us together, linking people to ideas, communities, and culture.
                            </p>

                            <p className="about-bio">
                            I design with curiosity and intention, focusing on how people experience, understand, and move through visual and interactive systems. 
                            My process is flexible and human centered, adapting to the scale of each project whether digital, physical, or somewhere in between. 
                            I’ve gained experience through internships and collaborative projects. Currently, I'm seeking opportunities in UX/UI or experiential design with teams that value curiosity, collaboration, and human centered thinking.
                            </p>

                            <p className="about-bio">
                            In my spare time, I enjoy photographing my cats, catching up One Piece or recharging through small creative hobbies. </p>


                            {/* STATS */}
                            <div className="about-stats">

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
                                <source src="https://player.cloudinary.com/embed/?cloud_name=dvo3q9yny&public_id=Logo_2_f1ireq" type="video/mp4" />
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