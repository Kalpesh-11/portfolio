import { ProjectProps, ProjectStoreProps } from "@/types";
import { create } from "zustand";

const projectStore = create<ProjectStoreProps>((set) => ({
  project: null,
  isOpen: false,

  handlePopup: (isOpen: boolean) => {
    set({ isOpen });
  },
  setProject: (project: ProjectProps) => {
    set({ project: project });
    set({ isOpen: true });
  },
}));
export default projectStore;
