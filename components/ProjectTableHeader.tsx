import React from "react";

export default function ProjectTableHeader() {
  return (
    <tr className="">
      <th className="project-column py-4">Project</th>
      <th className="detail-column desktop-column py-4">Details</th>
      <th className="tech-column desktop-column py-4">Tech Stack</th>
      <th className="link-column py-4">Link</th>
      <th className="info-column py-4"></th>
    </tr>
  );
}
