import { ReactNode } from "react";

export interface ElementChild {
  children: JSX.Element | JSX.Element[] | boolean | null | undefined;
}
export interface SectionWrapProps {
  children: ReactNode;
  sectionID: string;
}
export interface HeaderNavItemProps {
  title: string;
  link: string;
  isActive: string;
}
export interface SectionHeadingProps {
  title: string;
}
export interface SubHeadingProps {
  title: string;
  link?: string;
}
export interface CardContentProps {
  content: string;
}
export interface TagProps {
  title: string;
}
export interface ExperienceCardProps {
  title: string;
  duration: string;
  content: string;
  tags: string[];
  link?: string;
}
export interface ProjectCardProps {
  title: string;
  content: string;
  tags: string[];
  link?: string;
  imgSrc: string;
}
export interface ProjectListProps {
  setProject: (project: ProjectProps) => void;
}
export interface ProjectProps {
  title: string;
  content: string;
  learning: string[];
  link?: string;
  imgSrc: string;
}
export interface ProjectRowProps {
  project: ProjectProps;
}
export interface ProjectStoreProps {
  isOpen: boolean;
  project: ProjectProps | null;
  handlePopup: (isOpen: boolean) => void;
  setProject: (project: ProjectProps) => void;
}
