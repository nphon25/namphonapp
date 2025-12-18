import { useParams } from "react-router-dom";
import projects from "../data/projects.js";
import PTemplate from "../projects/PTemplate.jsx";

const ProjectPage = () => {
  const { projectId } = useParams();
  const normalizedId = String(projectId || "").trim().toLowerCase();

  const project = projects?.[normalizedId];

  if (!project) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Project not found: {projectId}</h2>
        <p>Available project IDs:</p>
        <pre>{JSON.stringify(Object.keys(projects || {}), null, 2)}</pre>
      </div>
    );
  }

  return <PTemplate project={project} />;
};

export default ProjectPage;
