import { ProjectCardProps } from "@/types";
import { CardContent, CardHover, SubHeading, Tag } from "@/components";
import Image from "next/image";

export default function ProjectCard({
  title,
  content,
  tags,
  link,
  imgSrc,
  github,
}: ProjectCardProps) {
  return (
    <div className="relative group flex flex-col gap-4 mb-8 lg:gap-6 lg:flex-row">
      <CardHover />
      <div className="text-sm font-extralight mt-3 tracking-normal lg:w-1/4 ">
        <Image src={imgSrc} alt={title} height={250} width={250} />
      </div>
      <div className="lg:w-3/4">
        <SubHeading title={title} link={link ? link : github} />
        <CardContent content={content} />
        <ul className="flex flex-wrap gap-2 mt-2 lg:mt-3">
          {tags.map((tag, index) => (
            <Tag key={`tag-${index}`} title={tag} />
          ))}
        </ul>
      </div>
    </div>
  );
}
