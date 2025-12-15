import { useParams } from "react-router-dom";
import projects from "../data/projects.js";     // NOTE .js added
import PTemplate from "../projects/PTemplate.jsx"; // NOTE .jsx added

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects?.[projectId];

  console.log("projectId:", projectId);
  console.log("projects keys:", Object.keys(projects || {}));
  console.log("project:", project);

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
