"use client";
import {
  GlowingCursor,
  ProjectList,
  ProjectPopup,
  ProjectTableHeader,
} from "@/components";

export default function projectPage() {
  return (
    <GlowingCursor>
      <main className="relative">
        <div className="max-w-screen-xl mx-auto px-8 pb-12 py-12 lg:py-24 lg:pb-2 md:px-20 lg:px-20">
          <h1 className="text-slate-100 text-4xl font-extrabold lg:text-5xl">
            All Projects
          </h1>
          <table className="w-full mt-6 lg:mt-10">
            <thead className="text-left sticky top-0 bg-slate-900 text-slate-200">
              <ProjectTableHeader />
            </thead>
            <tbody className="align-top">
              <ProjectList />
            </tbody>
          </table>
        </div>
        <ProjectPopup />
      </main>
    </GlowingCursor>
  );
}
