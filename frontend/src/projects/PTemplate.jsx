import { useMemo } from "react";
import "../styles/project.css";
import ScrollSpyNav from "../components/ScrollSpyNav";

const PTemplate = ({ project }) => {
  const navItems = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "brief", label: "Brief" },
      { id: "process", label: "Process" },
      { id: "visuals", label: "Final Design" },
      { id: "credits", label: "Credits" },
    ],
    []
  );

  if (!project) {
    return (
      <main style={{ padding: "2rem" }}>
        <h2>Project not found</h2>
      </main>
    );
  }

  /**
   * ✅ Toggle scrollspy per project AND auto-hide if only 1 item
   * If you'd rather require explicit true, use:
   * const showScrollSpy = project.scrollSpy && navItems.length > 1;
   True = scrollspy
   False = No scrollspy

  
  */


  const showScrollSpy = (project.scrollSpy ?? true ) && navItems.length > 1;

  return (
    <main>
      {/* HERO COVER */}
      <section className="hero-image" id="hero">
        <img
          src={project.hero}
          alt={project.heroAlt || `${project.title} hero`}
        />
      </section>

      {/* ✅ OPTIONAL SCROLLSPY NAV */}
      {showScrollSpy && (
        <ScrollSpyNav
          items={navItems}
          offset={96}
          rootMarginBottom="-60%"
        />
      )}

      {/* OVERVIEW */}
      <section className="case-section narrow scrollspy" id="overview">
        <h1>{project.title}</h1>
        <p className="intro">{project.intro}</p>

        <div className="project-overview">
          {(project.overviewRows || []).map((row, i) => (
            <div className="overview-row" key={i}>
              <span className="label">{row.label}</span>
              <span className="value">{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BRIEF & OBJECTIVES */}
      <section className="case-section narrow scrollspy" id="brief">
        <h2>Brief &amp; Objectives</h2>

        <div className="section-block">
          <h3>Background</h3>
          <p>{project.brief?.background}</p>
        </div>

        <div className="section-block">
          <h3>Design Objectives</h3>
          <ul className="goal-list">
            {(project.brief?.objectives || []).map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="section-block">
          <h3>Concept</h3>
          <p>{project.brief?.concept}</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="case-section narrow scrollspy" id="process">
        <h2>Process</h2>

        {(project.processSteps || []).map((step, i) => (
          <div className="process-step" key={i}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>

            <div className="process-media">
              {step.image && (
                <img
                  src={step.image}
                  alt={step.alt || step.title}
                />
              )}

              {step.video && (
                <video controls poster={step.poster}>
                  <source src={step.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* FINAL DESIGN */}
      <section className="case-section scrollspy" id="visuals">
        <h2>Final Design</h2>
        <p>{project.finalDesign?.intro}</p>

        {project.finalDesign?.mainImage && (
          <div className="case-image">
            <img
              src={project.finalDesign.mainImage}
              alt={project.finalDesign.mainAlt || "Primary final design"}
            />
          </div>
        )}

        {(project.finalDesign?.keyPieces || []).map((kp, i) => (
          <div className="section-block" key={i}>
            <h3>{kp.title}</h3>
            <p>{kp.text}</p>
          </div>
        ))}

        {project.finalDesign?.gridImages?.length ? (
          <div className="case-image ui-grid">
            {project.finalDesign.gridImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt || `Detail ${i + 1}`}
              />
            ))}
          </div>
        ) : null}
      </section>

      {/* CREDITS & REFLECTION */}
      <section className="case-section narrow scrollspy" id="credits">
        <h2>Credits &amp; Reflection</h2>
        <p>{project.credits}</p>
      </section>

      {/* RELATED PROJECTS */}
      <section className="case-section related-projects" id="related-projects">
        <div className="related-header">
          <h5 className="related-title">You may also like</h5>
          <div className="related-divider"></div>
        </div>

        <div className="project-grid related-grid">
          {(project.relatedProjects || []).map((rp, i) => (
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
    </main>
  );
};

export default PTemplate;
