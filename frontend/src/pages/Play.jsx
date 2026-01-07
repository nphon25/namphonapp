import React, { useState } from 'react';
import "../styles/Play.css";

const Play = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const playProjects = [
        {
            id: 1,
            title: "Digital Illustration Series",
            date: "2025",
            medium: "Illustration / Digital",
            software: "Photoshop, Illustrator",
            description: "A creative exploration of color, form, and digital techniques.",
            media: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&h=600&fit=crop",
            type: "image",
            size: "large"
        },
        {
            id: 2,
            title: "Motion Graphics Reel",
            date: "2024",
            medium: "Animation / Motion Graphics",
            software: "After Effects, Premiere",
            description: "Experimental animation showcasing dynamic typography and movement.",
            media: "https://www.w3schools.com/html/mov_bbb.mp4",
            type: "video",
            size: "medium"
        },
        {
            id: 3,
            title: "3D Art Exploration",
            date: "2025",
            medium: "3D / Digital",
            software: "Blender, Photoshop",
            description: "Abstract 3D compositions exploring light, space, and texture.",
            media: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
            type: "image",
            size: "medium"
        },
        // Add remaining projects as needed
    ];

    const openLightbox = (project) => {
        setSelectedMedia(project);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedMedia(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            {/* Hero Section */}
            <section id="play-hero">
                <div className="container">
                    <h1 className="play-hero-title">The Playground</h1>
                    <p className="play-hero-text">
                        Experiments, side projects, and creative explorations.
                    </p>
                </div>
            </section>

            {/* Bento Grid Gallery */}
            <section id="play-gallery">
                <div className="container">
                    <div className="bento-grid">
                        {playProjects.map((project) => (
                            <div 
                                key={project.id} 
                                className={`bento-item ${project.size}`}
                                onClick={() => openLightbox(project)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && openLightbox(project)}
                                aria-label={`View ${project.title}`}
                            >
                                {project.type === 'image' ? (
                                    <img 
                                        src={project.media} 
                                        alt={project.title} 
                                        loading="lazy" 
                                    />
                                ) : (
                                    <video 
                                        src={project.media}
                                        muted
                                        loop
                                        playsInline
                                        onMouseEnter={(e) => e.target.play()}
                                        onMouseLeave={(e) => e.target.pause()}
                                    />
                                )}
                                <div className="bento-overlay">
                                    <div className="overlay-text">
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-date">{project.date}</div>
                                        <div className="project-medium">{project.medium}</div>
                                        <div className="project-software">{project.software}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedMedia && (
                <div 
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Media preview"
                >
                    <button 
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        {selectedMedia.type === 'image' ? (
                            <img src={selectedMedia.media} alt={selectedMedia.title} />
                        ) : (
                            <video 
                                src={selectedMedia.media}
                                controls
                                autoPlay
                                loop
                                className="lightbox-video"
                            />
                        )}
                        <div className="lightbox-info">
                            <h2 className="lightbox-title">{selectedMedia.title}</h2>
                            <p className="lightbox-date">{selectedMedia.date}</p>
                            <p className="lightbox-medium">{selectedMedia.medium}</p>
                            <p className="lightbox-software">{selectedMedia.software}</p>
                            <p className="lightbox-description">{selectedMedia.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Play;
