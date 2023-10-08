import {
  AboutDetails,
  ExperienceWrap,
  GlowingCursor,
  Header,
  ProjectsWrap,
  SectionHeading,
  SectionWrap,
} from "@/components";

export default function Home() {
  const sections = [
    {
      id: "about",
      element: <AboutDetails />,
      heading: "About",
    },
    {
      id: "experience",
      element: <ExperienceWrap />,
      heading: "Experience",
    },
    {
      id: "projects",
      element: <ProjectsWrap />,
      heading: "Projects",
    },
  ];
  return (
    <GlowingCursor>
      <div className="max-w-screen-xl mx-auto px-8 pb-12 lg:pb-2  md:px-20 lg:px-20">
        <div className="block lg:flex lg:gap-4">
          <header className="py-12 lg:top-0 lg:h-screen lg:py-24 lg:w-1/2 lg:sticky">
            <Header />
          </header>
          <main className=" lg:w-1/2 lg:pt-24">
            {sections.map((section) => (
              <SectionWrap key={section.id} sectionID={section.id}>
                <SectionHeading title={section.heading} />
                {section.element}
              </SectionWrap>
            ))}
            <div className=""></div>
          </main>
        </div>
      </div>
    </GlowingCursor>
  );
}
