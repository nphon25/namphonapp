import React, { useState, useEffect, useCallback } from 'react';
import "../styles/Archive.css";

const Archive = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const projects = [
        
    {
            id: 1,
            title: "Portrait Study",
            description: "An exploration of vector-based portrait painting completed during my digital painting course. This project focused on building portraits through simplified shapes.",
            year: "2024",
            category: "Digital Art",
            size: "small",
            media: [
                { type: "image", url: "/assets/archive/portrait-1.png" },
                  { type: "image", url: "/assets/archive/portrait-2.png" },
                { type: "image", url: "/assets/archive/portrait-3.png" },
                { type: "image", url: "/assets/archive/portrait-4.png" },
                { type: "image", url: "/assets/archive/portrait-5.png"},
             { type: "image", url: "/assets/archive/portrait-6.png" },

            ]
        },
        {
            id: 2,
            title: "MLK",
            description: "This is a vector portrait of Martin Luther King Jr., with his “I Have a Dream” speech text behind him. I created it for Niner Times, a student-run news organization at the University of North Carolina at Charlotte, in honor of Black History Month.",
            year: "2023",
            category: " Vector Illustration",
            size: "large",
            media: [
                { type: "image", url: "/assets/archive/mlk.jpg" },
                { type: "image", url: "/assets/archive/mlk-news.jpg" }
            ]
        },
         {
            id: 3,
            title: "Cherry Sticker",
            description: "A cute sticker illustration I designed alongside the students during my time as an instructor at a summer camp for digital art. This piece was created for fun, giving students a sense of accomplishment at the end of the camp and celebrating the hard work they put in throughout the session.",
            year: "2024",
            category: "Illustration",
            size: "medium",
            media: [
                { type: "video", url: "/assets/archive/cherry.mp4" },
            ]
        },
         {
            id: 4,
            title: "I voted Sticker",
            description: "I voted sticker design for North Carolina reimagined",
            year: "2024",
            category: "Illustration",
            size: "medium",
            media: [
                { type: "image", url: "/assets/archive/I_voted.png" },
            ]
        },
        
     
    ];

    const openLightbox = useCallback((project) => {
        setSelectedProject(project);
        setCurrentMediaIndex(0);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('lightbox-open');
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedProject(null);
        setCurrentMediaIndex(0);
        document.body.style.overflow = 'unset';
        document.body.classList.remove('lightbox-open');
    }, []);

    const nextMedia = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentMediaIndex(prev => {
            if (selectedProject && prev < selectedProject.media.length - 1) {
                return prev + 1;
            }
            return prev;
        });
    }, [selectedProject]);

    const prevMedia = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentMediaIndex(prev => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev;
        });
    }, []);

    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextMedia();
            } else if (e.key === 'ArrowLeft') {
                prevMedia();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, closeLightbox, nextMedia, prevMedia]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('lightbox-open');
        };
    }, []);

    return (
        <div className="archive-page">
            <section className="archive-header">
                <h1 className="archive-title">Archive</h1>
                <p className="archive-subtitle">
                    Experiments, side projects, and creative explorations.
                </p>
            </section>

            <div className="archive-grid">
                {projects.map((project) => (
                    <article 
                        key={project.id}
                        className={`archive-card ${project.size}`}
                        onClick={() => openLightbox(project)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
                    >
                        <div className="archive-card-media">
                            {project.media[0].type === 'video' ? (
                                <video 
                                    src={project.media[0].url}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                />
                            ) : (
                                <img 
                                    src={project.media[0].url} 
                                    alt={project.title}
                                    loading="lazy"
                                />
                            )}
                            {project.media.length > 1 && (
                                <div className="media-badge">
                                    <i className="fas fa-images"></i>
                                    {project.media.length}
                                </div>
                            )}
                        </div>
                        <div className="archive-card-info">
                            <h3>{project.title}</h3>
                            <p>{project.category}</p>
                        </div>
                    </article>
                ))}
            </div>

            {selectedProject && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button 
                        className="lightbox-close" 
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox-media">
                            <div className="media-wrapper">
                                {selectedProject.media[currentMediaIndex].type === 'video' ? (
                                    <video 
                                        src={selectedProject.media[currentMediaIndex].url}
                                        controls
                                        autoPlay
                                        loop
                                    />
                                ) : (
                                    <img 
                                        src={selectedProject.media[currentMediaIndex].url}
                                        alt={`${selectedProject.title} ${currentMediaIndex + 1}`}
                                    />
                                )}
                            </div>

                            {selectedProject.media.length > 1 && (
                                <>
                                    <button 
                                        className="lightbox-nav prev"
                                        onClick={prevMedia}
                                        disabled={currentMediaIndex === 0}
                                        aria-label="Previous"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <button 
                                        className="lightbox-nav next"
                                        onClick={nextMedia}
                                        disabled={currentMediaIndex === selectedProject.media.length - 1}
                                        aria-label="Next"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </>
                            )}
                        </div>

                        <aside className="lightbox-sidebar">
                            <header>
                                <h2>{selectedProject.title}</h2>
                                <div className="meta">
                                    <span className="category">{selectedProject.category}</span>
                                    <span className="year">{selectedProject.year}</span>
                                </div>
                            </header>
                            <p className="description">{selectedProject.description}</p>
                            
                            {selectedProject.media.length > 1 && (
                                <>
                                    <div className="media-counter">
                                        <span>{currentMediaIndex + 1} / {selectedProject.media.length}</span>
                                    </div>
                                    <div className="progress-dots">
                                        {selectedProject.media.map((_, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={index === currentMediaIndex ? 'active' : ''}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentMediaIndex(index);
                                                }}
                                                aria-label={`View image ${index + 1}`}
                                                aria-current={index === currentMediaIndex ? 'true' : 'false'}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </aside>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Archive;