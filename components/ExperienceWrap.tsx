import React from "react";
import { ExperienceCard, SubHeading, Tag } from ".";
import CardContent from "./CardContent";
import experiences from "@/constants/experience";

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
    </>
  );
}
