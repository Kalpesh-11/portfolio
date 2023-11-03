import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
export const headerNavItems = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Projects",
    link: "projects",
  },
];
export const socialMedia = [
  {
    title: "Github",
    icon: <FiGithub />,
    link: "https://github.com/Kalpesh-11",
    target: "_blank",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/kalpesh-bhagat/",
    target: "_blank",
  },
  {
    title: "Instagram",
    icon: <FiInstagram />,
    link: "https://www.instagram.com/chin2_bhagat/?hl=en",
    target: "_blank",
  },
  {
    title: "Email",
    icon: <FiMail />,
    link: "mailto:kalpeshbhagat39@gmail.com",
    target: "",
  },
];
