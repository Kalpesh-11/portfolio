import React from "react";
import { ExperienceCard, SubHeading, Tag } from ".";
import CardContent from "./CardContent";
import experiences from "@/constants/experience";
import Link from "next/link";

export default function ExperienceWrap() {
  return (
    <>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`exp-${index}`}
          title={experience.title}
          duration={experience.duration}
          content={experience.content}
          tags={experience.learning}
          link={experience?.link}
        />
      ))}
      <Link
        href="/Kalpesh_bhagat.pdf"
        target="_blank"
        className="hover-animation text-sm lg:text-base"
      >
        <span> View Full Resume</span>
      </Link>
    </>
  );
}
