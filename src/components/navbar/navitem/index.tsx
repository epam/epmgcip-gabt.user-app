"use-client";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import type { Props } from "./types";

export const NavItem = ({ text, href, active, classname }: Props) => {
  return (
    <NavigationMenu.Item className={classname}>
      <Link href={href}>{text}</Link>
    </NavigationMenu.Item>
  );
};
