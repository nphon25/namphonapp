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
                            <p className="about-role"> </p>

                            <h1 className="about-name">
                                Nam Phon
                                <span className="pronunciation">(naam fohn)</span>
                            </h1>

                            <p className="about-bio">
                            Hi, I’m a graphic designer based in Charlotte, NC. Dawn to how design forms connections and brings us together, linking people to ideas, communities, and culture. I enjoy creating designs that leave a lasting impression.                            </p>


                           <p className="about-bio">
                           My process is flexible and human centered, adapting to the scale of each project, whether digital, physical, or somewhere in between. In essence, storytelling is at the core of my design philosophy, which can be translated no matter the medium. I believe the storytelling aspect is what makes a design more tangible.
                        </p>

                            <p className="about-bio">
                            Currently, I'm seeking opportunities in UX/UI or experiential design with teams that value curiosity, collaboration, and innovation. In my spare time, I enjoy photographing my cats, catching up on One Piece or recharging through small creative hobbies.</p>


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
                                aria-label="Introduction video of Nam Phon">
                                <source src="https://res.cloudinary.com/dvo3q9yny/video/upload/v1769459470/logo_lv2y3g.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div> {/* /.about-layout */}
                </div> {/* /.container */}
            </section>
        </main>
    );git 
};

export default About;