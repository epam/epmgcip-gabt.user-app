import { FC } from "react";

import { MENU_LIST } from "@/src/constants/nav-items-mock";
import { NavItem } from "../navitem";

const DesktopNavItems: FC = () => (
  <div className="hidden md:flex h-full w-1/3 items-center justify-center">
    {MENU_LIST.map(({ href, text }) => (
      <NavItem
        key={href}
        href={href}
        text={text}
        classname="px-4 text-green-400 text-nowrap text-lg hover:text-dark-red hover:underline"
      />
    ))}
  </div>
);

export default DesktopNavItems;
