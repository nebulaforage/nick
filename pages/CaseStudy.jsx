import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  return (
    <section>
      <h1>{project.title}</h1>

      <h3>Problem</h3>
      <p>{project.problem}</p>

      <h3>Solution</h3>
      <p>{project.solution}</p>

      <h3>Outcome</h3>
      <p>{project.outcome}</p>

      <h3>Director’s Notes</h3>
      <ul>
        {project.notes.map(n => <li key={n}>{n}</li>)}
      </ul>
    </section>
  );
}
