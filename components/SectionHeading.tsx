import { SectionHeadingProps } from "@/types";
import React from "react";

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="sticky top-0 w-full bg-slate-900 py-3 z-20 lg:hidden text-slate-200 text-lg font-medium ">
      <h1 className=" ">{title}</h1>
    </div>
  );
}
