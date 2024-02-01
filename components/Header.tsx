import { HeaderNav, SocialMedia } from ".";

export default function Header() {
  return (
    <>
      <div>
        <h1 className="text-slate-100 text-4xl font-extrabold lg:text-5xl">
          Kalpesh Bhagat
        </h1>
        <h2 className=" text-slate-300 text-xl mt-4 font-medium lg:text-2xl">
          Sr. Software Engineer at MemberPress
        </h2>
        <p className="text-sm mt-4 lg:text-lg">
          I transform ideas into digital realities, crafting seamless web
          solutions with a passion for accessibility and innovation.
        </p>
      </div>
      <nav className="hidden lg:block lg:mt-12">
        <HeaderNav />
      </nav>
      <div className="mt-12">
        <SocialMedia />
      </div>
    </>
  );
}
