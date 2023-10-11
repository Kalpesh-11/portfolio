import projectStore from "@/stores/projectStore";

import Image from "next/image";
import React from "react";
import { Tag } from ".";

export default function ProjectPopup() {
  const { isOpen, project, handlePopup } = projectStore();
  const handleClose = (event: React.MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (targetElement.id === "projectPopupWrap") {
      handlePopup(false);
    }
  };
  if (project === null) {
    return;
  }
  const style = isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0";
  return (
    <div
      className={`fixed inset-0 z-40 ${style} bg-slate-900/40 transition-all duration-200 `}
      id="projectPopupWrap"
      onClick={handleClose}
    >
      <div
        className={`absolute rounded-lg inset-1/2 bg-slate-950 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] p-6 lg:w-1/3 overflow-y-auto shadow-2xl`}
      >
        <div className="w-[80%] mx-auto">
          <Image
            src={project.imgSrc}
            alt={project.title}
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="mt-4">
          <a href={project.link} target="_blank">
            <h2 className="text-lg lg:text-xl font-bold text-slate-200">
              {project.title}
            </h2>
          </a>
          <p className="mt-2 text-sm">{project.content}</p>
          <a
            href={project.link}
            target="_blank"
            className="mt-2 block hover:text-highlight transition-colors"
          >
            {project.link}
          </a>
        </div>
        <ul className="flex flex-wrap gap-2 mt-4">
          {project.learning.map((tag, index) => (
            <Tag key={`tag-${index}`} title={tag} />
          ))}
        </ul>
      </div>
    </div>
  );
}
