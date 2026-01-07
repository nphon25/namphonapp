import { useMemo, useState, useEffect } from "react";
import "../styles/project.css";
import ScrollSpyNav from "../components/ScrollSpyNav";

// ===================================
// CAROUSEL COMPONENT - FULL IMAGE VIEW
// ===================================
const Carousel = ({ images, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2.5);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ✅ Responsive slides configuration
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      
      if (width >= 1200) {
        setSlidesPerView(3);        // Large desktop: 3 slides
      } else if (width >= 993) {
        setSlidesPerView(2.5);      // Desktop: 2.5 slides
      } else if (width >= 768) {
        setSlidesPerView(2);        // Tablet: 2 slides
      } else if (width >= 600) {
        setSlidesPerView(1.5);      // Small tablet: 1.5 slides
      } else {
        setSlidesPerView(1);        // Mobile: 1 slide
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // ✅ Calculate maximum scroll index
  const maxIndex = Math.max(0, images.length - Math.ceil(slidesPerView));

  // ✅ Navigation with smooth transition lock
  const goToNext = () => {
    if (isTransitioning || currentIndex >= maxIndex) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToPrev = () => {
    if (isTransitioning || currentIndex === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // ✅ Calculate slide width based on slides per view
  const slideWidthPercent = 100 / slidesPerView;
  const translateX = currentIndex * slideWidthPercent;

  // ✅ Show navigation only if needed
  const showNavigation = images.length > Math.ceil(slidesPerView);

  return (
    <div className="carousel-container">
      {/* Subtitle */}
      {subtitle && (
        <p className="carousel-subtitle">{subtitle}</p>
      )}

      <div className="carousel-wrapper">
        {/* Track */}
        <div
          className="carousel-track"
          style={{ 
            transform: `translateX(-${translateX}%)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none'
          }}
        >
          {images.map((img, index) => (
            <div 
              className="carousel-slide" 
              key={index}
              style={{ 
                width: `calc(${slideWidthPercent}% - ${0.625 * (slidesPerView - 1) / slidesPerView}rem)`
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt || `Slide ${index + 1}`}
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={goToPrev}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              tabIndex={0}
            >
              ‹
            </button>
            <button
              className="carousel-btn carousel-btn-next"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next slide"
              tabIndex={0}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {showNavigation && maxIndex > 0 && (
        <div className="carousel-dots" role="tablist">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1} of ${maxIndex + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
              tabIndex={index === currentIndex ? 0 : -1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ===================================
// MAIN TEMPLATE COMPONENT
// ===================================
const PTemplate = ({ project }) => {
  const navItems = useMemo(() => {
    const items = [];
    
    if (project?.intro || project?.overviewRows?.length) {
      items.push({ id: "overview", label: project.overviewLabel || "Overview" });
    }
    
    if (project?.brief) {
      items.push({ id: "brief", label: project.briefLabel || "Brief" });
    }
    
    if (project?.processSteps?.length) {
      items.push({ id: "process", label: project.processLabel || "Process" });
    }
    
    if (project?.finalDesign) {
      items.push({ id: "visuals", label: project.visualsLabel || "Final Design" });
    }
    
    if (project?.credits) {
      items.push({ id: "credits", label: project.creditsLabel || "Credits" });
    }
    
    return items;
  }, [project]);

  if (!project) {
    return (
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist.</p>
      </main>
    );
  }

  const showScrollSpy = (project.scrollSpy ?? true) && navItems.length > 1;

  return (
    <main>
      {/* HERO */}
      {project.hero && (
        <section className="hero-image" id="hero">
          <img
            src={project.hero}
            alt={project.heroAlt || `${project.title} hero`}
          />
        </section>
      )}

      {/* SCROLLSPY NAV */}
      {showScrollSpy && (
        <ScrollSpyNav
          items={navItems}
          offset={96}
          rootMarginBottom="-60%"
        />
      )}

      {/* OVERVIEW */}
      {(project.intro || project.overviewRows?.length > 0) && (
        <section className="case-section narrow scrollspy" id="overview">
          {project.showTitle !== false && project.title && <h1>{project.title}</h1>}
          {project.intro && <p className="intro">{project.intro}</p>}
          {project.overviewRows?.length > 0 && (
            <div className="project-overview">
              {project.overviewRows.map((row, i) => (
                <div className="overview-row" key={i}>
                  <span className="label">{row.label}</span>
                  <span className="value">{row.value}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* BRIEF */}
      {project.brief && (
        <section className="case-section narrow scrollspy" id="brief">
          {project.brief.showTitle !== false && (
            <h2>{project.brief.title || "Brief & Objectives"}</h2>
          )}
          {project.brief.background && (
            <div className="section-block">
              {project.brief.showSubtitles !== false && <h3>Background</h3>}
              <p>{project.brief.background}</p>
            </div>
          )}
          {project.brief.objectives?.length > 0 && (
            <div className="section-block">
              {project.brief.showSubtitles !== false && <h3>Design Objectives</h3>}
              <ul className="goal-list">
                {project.brief.objectives.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>
          )}
          {project.brief.concept && (
            <div className="section-block">
              {project.brief.showSubtitles !== false && <h3>Concept</h3>}
              <p>{project.brief.concept}</p>
            </div>
          )}
        </section>
      )}

      {/* PROCESS */}
      {project.processSteps?.length > 0 && (
        <section 
          className={`case-section ${project.processLayout === "bento" ? "" : "narrow"} scrollspy`} 
          id="process"
        >
          {project.showProcessTitle !== false && (
            <h2>{project.processTitle || "Process"}</h2>
          )}
          
          {/* Traditional stacked layout */}
          {project.processLayout !== "bento" && project.processSteps.map((step, i) => (
            <div className="process-step" key={i}>
              {step.showTitle !== false && step.title && <h3>{step.title}</h3>}
              {step.text && <p>{step.text}</p>}
              {(step.image || step.video) && (
                <div className="process-media">
                  {step.image && (
                    <img src={step.image} alt={step.alt || step.title} />
                  )}
                  {step.video && (
                    <video controls poster={step.poster}>
                      <source src={step.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* Bento grid layout */}
          {project.processLayout === "bento" && (
            <div className="process-bento-grid">
              {project.processSteps.map((step, i) => (
                <div 
                  className={`bento-item ${step.size || ''}`} 
                  key={i}
                  style={step.span ? { gridColumn: `span ${step.span}` } : {}}
                >
                  {(step.image || step.video) && (
                    <div className="bento-media">
                      {step.image && (
                        <img src={step.image} alt={step.alt || step.title} />
                      )}
                      {step.video && (
                        <video controls poster={step.poster}>
                          <source src={step.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  )}
                  {(step.title || step.text) && (
                    <div className="bento-content">
                      {step.title && <h4>{step.title}</h4>}
                      {step.text && <p>{step.text}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* FINAL DESIGN */}
      {project.finalDesign && (
        <section className="case-section scrollspy" id="visuals">
          {project.finalDesign.showTitle !== false && (
            <h2>{project.finalDesign.title || "Final Design"}</h2>
          )}
          {project.finalDesign.intro && <p>{project.finalDesign.intro}</p>}
          
          {project.finalDesign.mainImage && (
            <div className="case-image">
              <img
                src={project.finalDesign.mainImage}
                alt={project.finalDesign.mainAlt || "Primary final design"}
              />
            </div>
          )}

          {project.finalDesign.keyPieces?.length > 0 &&
            project.finalDesign.keyPieces.map((kp, i) => (
              <div className="section-block" key={i}>
                {kp.title && <h3>{kp.title}</h3>}
                {kp.text && <p>{kp.text}</p>}
              </div>
            ))}

          {/* CAROUSEL */}
          {project.finalDesign.carousel && project.finalDesign.carouselImages?.length > 0 && (
            <Carousel 
              images={project.finalDesign.carouselImages}
              subtitle={project.finalDesign.carouselSubtitle}
            />
          )}

          {/* GRID */}
          {!project.finalDesign.carousel && project.finalDesign.gridImages?.length > 0 && (
            <div className="case-image ui-grid">
              {project.finalDesign.gridImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt || `Detail ${i + 1}`}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* CREDITS */}
      {project.credits && (
        <section className="case-section narrow scrollspy" id="credits">
          {project.showCreditsTitle !== false && (
            <h2>{project.creditsTitle || "Credits & Reflection"}</h2>
          )}
          <p>{project.credits}</p>
        </section>
      )}

      {/* RELATED PROJECTS */}
      {project.relatedProjects?.length > 0 && (
        <section className="case-section related-projects" id="related-projects">
          <div className="related-header">
            <h5 className="related-title">{project.relatedTitle || "You may also like"}</h5>
            <div className="related-divider"></div>
          </div>
          <div className="project-grid related-grid">
            {project.relatedProjects.map((rp, i) => (
              <a key={i} href={rp.href} className="project-item">
                <div className="project-image-wrap">
                  <img
                    src={rp.image}
                    alt={rp.alt || rp.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{rp.title}</h3>
                  <p className="project-meta">{rp.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default PTemplate;