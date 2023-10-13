import projects from "@/constants/projects";
import { ProjectRow } from "@/components";
export default function ProjectList() {
  return projects.map((project, index) => (
    <ProjectRow key={index} project={project} />
  ));
}
