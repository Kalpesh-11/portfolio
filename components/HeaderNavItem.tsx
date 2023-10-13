import { HeaderNavItemProps } from "@/types";
import Link from "next/link";

export default function HeaderNavItem({
  title,
  link,
  isActive,
}: HeaderNavItemProps) {
  return (
    <li className={`navItem mt-2 w-3`}>
      <Link href={`#${link}`} className={`hover-animation ${isActive}`}>
        <span>{title}</span>
      </Link>
    </li>
  );
}
