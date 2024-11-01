import { FC, useState } from "react";
import Link from "next/link";

import { MENU_LIST } from "@/src/constants/nav-items-mock";

import { NavItem } from "../navitem";

const DesktopNavItems: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="hidden md:flex h-full w-1/3 items-center mx-6">
      {MENU_LIST.map(({ href, text, subMenu }, index) => (
        <div
          key={href}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <NavItem
            href={href}
            text={text}
            classname="px-4 text-green-400 text-nowrap text-lg hover:text-dark-red hover:underline"
          />
          {(hoveredIndex === index ||
            (hoveredIndex !== null && hoveredIndex === index)) &&
            subMenu && (
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-300 shadow-lg z-10">
                {subMenu.map(({ text, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dark-red hover:underline"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavItems;
