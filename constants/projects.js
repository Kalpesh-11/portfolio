const projects = [
  {
    title: "CarView",
    content:
      "Explore car specs, performance, and more with ease. Discover transmission types and fuel efficiency. A hobby project for car enthusiasts.",
    learning: ["React", "NEXT.js", "Tailwind", "headless UI", "Axios"],
    link: "https://carview.vercel.app",
    imgSrc: "/next.svg",
    isFeatured: true,
  },
  {
    title: "TaskTracer",
    content:
      "TaskTracer simplifies time tracking for daily tasks. Easily track and view your past activities using the calendar feature. Export your data in CSV and Excel formats for effortless management and reporting. Stay organized with TaskTracer.",
    learning: [
      "React",
      "Express",
      "MangoDB",
      "Zustand",
      "Axios",
      "CSS",
      "Nodemailer",
    ],
    link: "https://tasktracer.vercel.app/",
    imgSrc: "/Screenshot 2023-10-12 004810.png",
    isFeatured: true,
  },
  {
    title: "Netflix - Clone",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    imgSrc: "/next.svg",
    isFeatured: true,
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/Screenshot 2023-10-12 004810.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
  {
    title: "Netflix - Clone121",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    link: "#",
    imgSrc: "/next.svg",
  },
];
export async function featuredProjectList() {
  const featuredList = projects.filter((project) => project.isFeatured == true);
  return featuredList;
}
export default projects;
