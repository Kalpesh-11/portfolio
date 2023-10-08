import { ExperienceCardProps } from "@/types";
import { CardContent, CardHover, SubHeading, Tag } from "@/components";

export default function ExperienceCard({
  title,
  duration,
  content,
  tags,
  link,
}: ExperienceCardProps) {
  return (
    <div className="relative group flex flex-col gap-4 mb-8 lg:gap-6 lg:flex-row">
      <CardHover />
      <header className="text-sm font-extralight mt-2 tracking-normal lg:w-1/4 lg:font-light ">
        {duration}
      </header>
      <div className="lg:w-3/4">
        <SubHeading title={title} link={link} />
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
