// src/pages/ProjectPage.jsx

import { useParams } from "react-router-dom";
import projects from "../data/projects.js";
import PTemplate from "../projects/PTemplate.jsx";

const ProjectPage = () => {
  const params = useParams();

  // Support either route param name: :projectId or :slug
  const rawId = params.projectId ?? params.slug ?? "";
  const projectId = String(rawId).trim().toLowerCase();

  // Supports BOTH data shapes:
  // - object: { alma: {...}, pcos: {...} }
  // - array:  [{ slug: "alma", ...}, ...]
  const project = Array.isArray(projects)
    ? projects.find((p) => String(p.slug || "").toLowerCase() === projectId)
    : projects?.[projectId];

  const availableIds = Array.isArray(projects)
    ? projects.map((p) => p.slug).filter(Boolean)
    : Object.keys(projects || {});

  if (!project) {
    return (
      <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "0.75rem" }}>Project not found: {rawId}</h2>
        <p style={{ marginBottom: "0.5rem" }}>
          Route param received: <strong>{JSON.stringify(params)}</strong>
        </p>
        <p style={{ marginBottom: "0.5rem" }}>Available project IDs:</p>
        <pre style={{ background: "#f6f6f6", padding: "1rem", borderRadius: "8px", overflowX: "auto" }}>
          {JSON.stringify(availableIds, null, 2)}
        </pre>

        <p style={{ marginTop: "1rem" }}>
          Try URLs like: <code>/project/alma</code> or <code>/project/pcos</code>
        </p>
      </div>
    );
  }

  return <PTemplate project={project} />;
};

export default ProjectPage;
