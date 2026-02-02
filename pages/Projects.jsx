import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2>Selected Work</h2>
      {projects.map(p => <ProjectCard key={p.id} project={p} />)}
    </section>
  );
}
