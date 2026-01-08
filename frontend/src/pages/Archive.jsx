import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Archive.css";

const Archive = () => {
    const [activeItem, setActiveItem] = useState(null);

    const projects = [
        {
            id: 1,
            title: "ALMA",
            description: "Community-based UX/UI design",
            year: "2024",
            media: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=800&fit=crop",
            type: "image",
            size: "tall",
            link: "/project/alma"
        },
        {
            id: 2,
            title: "Motion Graphics",
            description: "Animated compositions",
            year: "2024",
            media: "https://www.w3schools.com/html/mov_bbb.mp4",
            type: "video",
            size: "wide",
            link: "#"
        },
        {
            id: 3,
            title: "PCOS Campaign",
            description: "Public health campaign design",
            year: "2024",
            media: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
            type: "image",
            size: "medium",
            link: "/project/pcos"
        },
        {
            id: 4,
            title: "Brand Identity",
            description: "Visual identity system",
            year: "2024",
            media: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
            type: "image",
            size: "medium",
            link: "#"
        },
        {
            id: 5,
            title: "Digital Illustration",
            description: "Experimental artwork",
            year: "2024",
            media: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop",
            type: "image",
            size: "tall",
            link: "#"
        },
        {
            id: 6,
            title: "Animation Demo",
            description: "Short animation loop",
            year: "2023",
            media: "https://www.w3schools.com/html/movie.mp4",
            type: "video",
            size: "medium",
            link: "#"
        },
        {
            id: 7,
            title: "Editorial Design",
            description: "Magazine layout exploration",
            year: "2023",
            media: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop",
            type: "image",
            size: "medium",
            link: "#"
        },
        {
            id: 8,
            title: "Packaging Design",
            description: "Sustainable packaging",
            year: "2023",
            media: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop",
            type: "image",
            size: "wide",
            link: "#"
        },
        {
            id: 9,
            title: "Web Design",
            description: "Responsive website",
            year: "2023",
            media: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=800&fit=crop",
            type: "image",
            size: "tall",
            link: "#"
        },
        {
            id: 10,
            title: "3D Art",
            description: "Abstract 3D rendering",
            year: "2022",
            media: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&h=600&fit=crop",
            type: "image",
            size: "medium",
            link: "#"
        }
    ];

    const handleTouchStart = (e, projectId) => {
        // On mobile, first tap shows overlay, second tap follows link
        if (activeItem === projectId) {
            // Already active, let the link work
            return;
        } else {
            // Not active, show overlay and prevent navigation
            e.preventDefault();
            setActiveItem(projectId);
        }
    };

    return (
        <div className="archive-page">
            {/* Header */}
            <section className="archive-header">
                <h1 className="archive-title">Archive</h1>
                <p className="archive-subtitle">
                    Experiments, side projects, and creative explorations
                </p>
            </section>

            {/* Gallery Grid */}
            <div className="gallery-grid">
                {projects.map((project) => (
                    <Link 
                        key={project.id}
                        to={project.link}
                        className={`gallery-item ${project.size} ${activeItem === project.id ? 'touch-active' : ''}`}
                        onTouchStart={(e) => handleTouchStart(e, project.id)}
                        onClick={(e) => {
                            // On desktop, just navigate normally
                            // On mobile, first tap is handled by onTouchStart
                        }}
                    >
                        {project.type === 'video' ? (
                            <video 
                                src={project.media}
                                muted
                                loop
                                playsInline
                                autoPlay
                                preload="metadata"
                            />
                        ) : (
                            <img 
                                src={project.media} 
                                alt={project.title}
                                loading="lazy"
                            />
                        )}
                        <div className="gallery-hover">
                            <div className="hover-content">
                                <h3 className="hover-title">{project.title}</h3>
                                <p className="hover-description">{project.description}</p>
                                <span className="hover-year">{project.year}</span>
                            </div>
                        </div>
                        
                        {/* Mobile Info - Always visible on mobile */}
                        <div className="mobile-info">
                            <h3 className="mobile-title">{project.title}</h3>
                            <p className="mobile-year">{project.year}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Archive;