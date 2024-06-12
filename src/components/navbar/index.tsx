"use client";
import { Flex } from "@radix-ui/themes";
import { NavItem } from "./navitem";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import logo from "@/public/theatre-icon.svg";
import { MENU_LIST } from "@/src/constants/nav-items-mock";

export const Navbar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <Flex align="center" direction="row" className="h-24">
          <div className="h-full w-1/3  flex flex-row items-center justify-center">
            {MENU_LIST.map(({ href, text }) => (
              <NavItem
                key={href}
                href={href}
                text={text}
                classname="px-4 text-nowrap text-lg hover:text-dark-red hover:underline"
              />
            ))}
          </div>
          <div className="w-1/3 flex justify-center">
            <Image src={logo} alt="logo" />
          </div>
        </Flex>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
