import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3>{project.title}</h3>
      <Link to={`/projects/${project.id}`}>View Case Study →</Link>
    </motion.div>
  );
}
