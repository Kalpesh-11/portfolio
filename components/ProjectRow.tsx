import React from "react";
import { Tag } from "@/components";
import { ProjectRowProps } from "@/types";
import projectStore from "@/stores/projectStore";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function ProjectRow({ project }: ProjectRowProps) {
  const { setProject } = projectStore();
  return (
    <tr className="text-sm lg:text-base">
      <td className="project-column font-semibold text-slate-200 lg:text-lg lg:font-bold py-2">
        <a href={project.link} target="_blank">
          <h2 className="">{project.title}</h2>
        </a>
      </td>
      <td className="detail-column desktop-column">
        <div className="truncate w-80 py-2">{project.content}</div>
      </td>
      <td className="tech-column desktop-column">
        <ul className="flex flex-wrap gap-2">
          {project.learning.map((tag, index) => (
            <Tag key={`tag-${index}`} title={tag} />
          ))}
        </ul>
      </td>
      <td className="link-column py-2">
        <a
          href={project.link}
          target="_blank"
          className="block hover:text-highlight transition-colors"
        >
          {project.link}
        </a>
      </td>
      <td className="info-column flex justify-center items-center py-2 px-2 text-xl lg:text-2xl hover:text-highlight transition-colors">
        <button
          onClick={() => {
            setProject(project);
          }}
        >
          <AiOutlineInfoCircle />
        </button>
      </td>
    </tr>
  );
}
