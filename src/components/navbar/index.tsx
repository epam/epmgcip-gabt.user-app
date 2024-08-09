"use client";
import { useState, useEffect, useRef } from "react";
import { Flex } from "@radix-ui/themes";
import { NavItem } from "./navitem";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import logo from "@/public/theatre-icon.svg";
import { MENU_LIST } from "@/src/constants/nav-items-mock";
import LocaleSwitcher from "../intro/language-switcher";
import openMenu from "@/public/openBar.svg";
import closeMenu from "@/public/Close.svg";
import arrowIcon from "@/public/arrow.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleSubMenu = (index: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <Flex
          align="center"
          direction="row"
          className="h-24 border-b border-gray-300 py-16 md:py-0 md:border-0 pl-8 pr-10"
        >
          <div className="h-full w-1/3 flex flex-row items-center justify-start mx-4 md:justify-center md:hidden">
            {/* Hamburger icon */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="md:hidden text-2xl flex items-center"
            >
              {isOpen ? (
                <Image src={closeMenu} alt="Close menu" />
              ) : (
                <Image src={openMenu} alt="Open menu" />
              )}
              <span className="ml-2 text-lg">{isOpen ? "Close" : "MENU"}</span>
            </button>
          </div>
          <div className="hidden md:flex h-full w-1/3 flex-row items-center justify-center">
            {MENU_LIST.map(({ href, text }) => (
              <NavItem
                key={href}
                href={href}
                text={text}
                classname="px-4 text-green-400 text-nowrap text-lg hover:text-dark-red hover:underline"
              />
            ))}
          </div>

          <div className="w-1/3 flex justify-center">
            <Image src={logo} alt="logo" />
          </div>

          <div className="w-1/3 flex justify-end md:justify-center">
            <LocaleSwitcher />
          </div>
        </Flex>

        {/* Background overlay for small screens */}
        {isOpen && (
          <div className="fixed top-32 inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 md:hidden"></div>
        )}

        {/* Menu items for small screens */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-32 inset-x-0 bg-white-text border-b-2 border-gray-600 z-20 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {MENU_LIST.map(({ href, text, subMenu }, index) => (
            <div key={index} className="block px-4 mx-4 flex flex-col">
              <div
                className={`flex flex-col items-start px-4 py-8 text-lg ${
                  index !== MENU_LIST.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                <div className="w-full flex items-center justify-between text-lg hover:text-dark-red">
                  <NavItem href={href} text={text} classname="no-underline" />
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="text-lg"
                  >
                    <Image
                      alt="arrow"
                      src={arrowIcon.src}
                      width={12}
                      height={10}
                      className={`transition-transform duration-300 ${
                        openItems[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {openItems[index] && subMenu && (
                  <div className="mt-2">
                    {subMenu.map(({ href: subHref, text: subText }) => (
                      <a
                        key={subHref}
                        href={subHref}
                        className="block hover:text-dark-red"
                      >
                        {subText}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
