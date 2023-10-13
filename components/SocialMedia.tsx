import { socialMedia } from "@/constants/nav";
export default function SocialMedia() {
  return (
    <ul className="text-2xl flex gap-3 list-none md:text-3xl lg:text-4xl lg:gap-6">
      {socialMedia.map((navItem, index) => (
        <li key={`social-${index}`} aria-label={navItem.title}>
          <a
            target={navItem.target}
            href={navItem.link}
            aria-label={navItem.title}
            className="hover:text-highlight transition-all hover:drop-shadow-[0_10px_10px_highlight]"
          >
            {navItem.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
