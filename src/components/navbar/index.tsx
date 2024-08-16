"use client";
import { useState, useEffect, useRef } from "react";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import logo from "@/public/theatre-icon.svg";
import LocaleSwitcher from "../intro/language-switcher";
import MobileNavMenu from "./mobile-menu";
import DesktopNavItems from "./dektop-nav-items";
import MenuButton from "../buttons/menu-buttn";
import useMediaQuery from "../hooks/useMediaQuery";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [isLocaleSwitcherVisible, setLocaleSwitcherVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const localeRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubMenu = (index: number) =>
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node) &&
      localeRef.current &&
      !localeRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setLocaleSwitcherVisible(false);
    }
  };

  useEffect(() => {
    if (isOpen || isLocaleSwitcherVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, isLocaleSwitcherVisible]);

  const toggleLocaleSwitcher = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
    setLocaleSwitcherVisible((prev) => !prev);
  };

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <Flex
          align="center"
          direction="row"
          className="h-24 border-b border-gray-300 py-16 md:py-0 md:border-0 pl-8 pr-10"
        >
          <MenuButton
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            buttonRef={buttonRef}
          />
          <DesktopNavItems />
          <div className="w-1/3 flex justify-center">
            <Image src={logo} alt="logo" />
          </div>
          <div className="w-1/3 flex justify-center md:justify-end">
            <div onClick={toggleLocaleSwitcher}>
              <LocaleSwitcher localeRef={localeRef} isMobile={false} />
            </div>
          </div>
        </Flex>

        {isOpen && (
          <div className="fixed top-32 inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 md:hidden"></div>
        )}

        <MobileNavMenu
          isOpen={isOpen}
          menuRef={menuRef}
          openItems={openItems}
          toggleSubMenu={toggleSubMenu}
          localeSwitcherVisible={isLocaleSwitcherVisible}
          isMobile={isMobile}
        />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
