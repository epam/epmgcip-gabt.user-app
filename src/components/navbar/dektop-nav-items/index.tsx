import { FC } from "react";

import { IMenuItem, MENU_LIST } from "@/src/constants/nav-items-mock";

import { NavItem } from "../navitem";

const DesktopNavItems: FC = () => (
  <div className="hidden md:flex h-full w-1/3 items-center mx-6">
    {MENU_LIST.map(({ href, text }: IMenuItem) => (
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
