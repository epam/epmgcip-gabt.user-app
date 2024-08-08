"use client";
import { useState } from "react";
import { Flex } from "@radix-ui/themes";
import { NavItem } from "./navitem";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import logo from "@/public/theatre-icon.svg";
import { MENU_LIST } from "@/src/constants/nav-items-mock";
import LocaleSwitcher from "../intro/language-switcher";
// import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <Flex
          align="center"
          direction="row"
          className="h-24 border-b border-gray-300 py-16 md:py-0 md:border-0 px-8"
        >
          <div className="h-full w-1/3 flex flex-row items-center justify-start mx-4 md:justify-center md:hidden">
            {/* Hamburger icon */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-2xl flex items-center"
            >
              {/* {isOpen ? <FaTimes /> : <FaBars />} */}
              <span className="ml-2 text-lg">{isOpen ? "Closed" : "Open"}</span>
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

        {/* Menu items for small screens */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} flex flex-col`}
        >
          {MENU_LIST.map(({ href, text, subMenu }, index) => (
            <div key={index} className="block px-4 mx-8 py-2 flex flex-col">
              <div className="flex flex-col items-start   text-lg border-b border-gray-300 ">
                <div className="w-full flex items-center justify-between text-lg   hover:text-dark-red  ">
                  <NavItem href={href} text={text} classname="no-underline" />
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="text-lg"
                  >
                    {/* <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openItems[index] ? "rotate-180" : ""
                      }`} */}
                    {/* /> */}
                  </button>
                </div>
                {openItems[index] && subMenu && (
                  <div className=" mt-2">
                    {subMenu.map(({ href: subHref, text: subText }) => (
                      <a
                        key={subHref}
                        href={subHref}
                        className="block  hover:text-dark-red"
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
