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
              github={project?.gitHub}
            />
          );
        }
      })}
      <Link href="projects" className="hover-animation text-sm lg:text-base">
        <span> View All Project</span>
      </Link>
    </>
  );
}
