import projects from "@/constants/projects";
import { ProjectCard } from "@/components";
export default function ProjectsWrap() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={`prj-${index}`}
          title={project.title}
          content={project.content}
          tags={project.learning}
          link={project?.link}
          imgSrc={project.imgSrc}
        />
      ))}
    </>
  );
}
