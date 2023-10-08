import { SubHeadingProps } from "@/types";

export default function SubHeading({ title, link }: SubHeadingProps) {
  return (
    <h3 className="text-slate-200 mt-2 group-hover:text-highlight">
      <div>
        <a href={link} target="_blank">
          <span className="absolute -inset-3 hidden rounded-md z-20 lg:block"></span>
          <span>{title}</span>
        </a>
      </div>
    </h3>
  );
}
