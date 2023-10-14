const projects = [
  {
    title: "CarView",
    content:
      "Explore car specs, performance, and more with ease. Discover transmission types and fuel efficiency. A hobby project for car enthusiasts.",
    learning: ["React", "NEXT.js", "Tailwind", "headless UI", "Axios"],
    link: "https://carview.vercel.app",
    imgSrc: "/carview.png",
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
    imgSrc: "/tasktracer.png",
    isFeatured: true,
  },
  {
    title: "Netflix - Clone",
    content:
      "Introducing NetflixClone, a hobby project that mirrors the Netflix experience. Browse the latest movies and TV shows, filter by categories, and enjoy a seamless exploration of entertainment. Experience the thrill of discovering new content, all within NetflixClone!",
    learning: ["React", "NEXT.js", "Tailwind", "Material UI", "Axios", "Redux"],
    imgSrc: "/netflix.png",
    isFeatured: true,
    link: "https://netklixclone.vercel.app/",
    gitHub: "https://github.com/Kalpesh-11/netflix-dev",
  },
  {
    title: "Portfolio",
    content:
      "Explore my personal portfolio project, a digital showcase of my skills and experiences. Discover my journey, achievements, and expertise in one convenient place.",
    learning: ["React", "NEXT.js", "Tailwind", "Zustand"],
    link: "https://kalpesh-portfolio.vercel.app/",
    imgSrc: "/pf.png",
  },
  {
    title: "WooCommerce WhatsApp Automation Plugin",
    content:
      "Created a confidential WordPress plugin for a prominent e-commerce platform. This plugin streamlines WhatsApp notifications for various order-related events, including abandoned checkouts, CoD order confirmations, prepaid orders, shipments, deliveries, and cancellations.",
    learning: ["WordPress", "WooCommerce", "PHP", "REST API"],
  },
  {
    title: "WooCommerce Custom Payment Gateway",
    content:
      "Developed an innovative WooCommerce plugin for a client, offering fee-free payments and customer refunds, backed by Open Banking technology. This solution reduces cart abandonment, lowers operational costs, and provides an exceptional customer experience. Welcome to the future of e-commerce payments.",
    learning: ["WordPress", "WooCommerce", "PHP", "REST API"],
  },
  {
    title: "GBRO - Greenmetry",
    content:
      "Greenmetry: A User-Friendly Solution for Streamlined CalGreen Compliance. It helps community of architects, designers, builders, planners, and inspectors dedicated to unlocking the full potential of green building codes for a sustainable future.",
    learning: [
      "WordPress",
      "Gravity Form",
      "Gravity View",
      "PHP",
      "elementor",
      "REST API",
    ],
    imgSrc: "/greenmetry.png",
    link: "https://greenmetry.com/",
  },
];
export async function featuredProjectList() {
  const featuredList = projects.filter((project) => project.isFeatured == true);
  return featuredList;
}
export default projects;
