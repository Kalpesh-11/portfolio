import { TagProps } from "@/types";

export default function Tag({ title }: TagProps) {
  return (
    <li className="px-2 py-2 bg-slate-800 text-highlight text-center rounded-full text-xs font-medium leading-5 lg:min-w-[50px]">
      {title}
    </li>
  );
}
