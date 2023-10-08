import { HeaderNavItemProps } from "@/types";
import Link from "next/link";

export default function HeaderNavItem({
  title,
  link,
  isActive,
}: HeaderNavItemProps) {
  return (
    <li className={`navItem mt-2 ${isActive}`}>
      <Link href={`#${link}`}>{title}</Link>
    </li>
  );
}
