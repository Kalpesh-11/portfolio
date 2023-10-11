import projects from "@/constants/projects";
import { ProjectCard } from "@/components";
import Link from "next/link";
export default function ProjectsWrap() {
  return (
    <>
      {projects.map((project, index) => {
        if (project.isFeatured === true) {
          return (
            <ProjectCard
              key={`prj-${index}`}
              title={project.title}
              content={project.content}
              tags={project.learning}
              link={project?.link}
              imgSrc={project.imgSrc}
            />
          );
        }
      })}
      <Link
        href="projects"
        className="text-slate-300 hover:text-highlight transition-colors"
      >
        View All Project
      </Link>
    </>
  );
}
