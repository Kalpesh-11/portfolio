import { socialMedia } from "@/constants/nav";
export default function SocialMedia() {
  return (
    <ul className="text-2xl flex gap-3 list-none md:text-3xl lg:text-4xl lg:gap-6">
      {socialMedia.map((navItem, index) => (
        <li key={`social-${index}`} aria-label={navItem.title}>
          <a target="_blank" href={navItem.link}>
            {navItem.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
