"use client";
import React, { useEffect, useState } from "react";
import { HeaderNavItem } from "@/components";
import { headerNavItems } from "@/constants/nav";
export default function HeaderNav() {
  const [activeSection, setActiveSection] = useState<string | null>("");
  useEffect(() => {
    document.addEventListener("scroll", function () {
      const sections = document.querySelectorAll("section");
      sections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        if (
          sectionTop <= window.scrollY &&
          sectionTop + sectionHeight > window.scrollY
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    });
  }, []);
  return (
    <ul>
      {headerNavItems.map((navItem, index) => (
        <HeaderNavItem
          key={`nav-${index}`}
          title={navItem.title}
          link={navItem.link}
          isActive={activeSection == navItem.link ? "active" : ""}
        />
      ))}
    </ul>
  );
}
