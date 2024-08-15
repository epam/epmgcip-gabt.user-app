"use-client";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import type { IProps } from "./types";

export const NavItem = ({ text, href, classname }: IProps) => {
  return (
    <NavigationMenu.Item className={classname}>
      <Link href={href}>{text}</Link>
    </NavigationMenu.Item>
  );
};
