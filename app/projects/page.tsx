"use client";
import {
  GlowingCursor,
  ProjectList,
  ProjectPopup,
  ProjectTableHeader,
} from "@/components";
import Link from "next/link";

export default function projectPage() {
  return (
    <GlowingCursor>
      <main className="relative">
        <div className="max-w-screen-xl mx-auto px-8 pb-12 py-12 lg:py-20 lg:pb-2 md:px-20 lg:px-20">
          <Link
            href="/"
            className="px-3 hover:text-highlight transition-colors"
          >
            Back to Kalpesh Bhagat
          </Link>
          <h1 className="text-slate-100 text-4xl mt-4  font-extrabold lg:text-5xl">
            All Projects
          </h1>
          <table className="w-full mt-5 lg:mt-6">
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
