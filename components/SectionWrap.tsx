import { SectionWrapProps } from "@/types";

export default function SectionWrap({ children, sectionID }: SectionWrapProps) {
  return (
    <section id={sectionID} className="mb-16 lg:scroll-mt-24 relative">
      {children}
    </section>
  );
}
