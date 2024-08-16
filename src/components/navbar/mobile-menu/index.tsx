import React, { FC, useEffect } from "react";

import Image from "next/image";

import arrowIcon from "@/public/arrow.svg";

import { MENU_LIST } from "@/src/constants/nav-items-mock";
import { NavItem } from "../navitem";
import LocaleSwitcher from "../../intro/language-switcher";
import { IMobileNavMenuProps } from "./types";

const MobileNavMenu: FC<IMobileNavMenuProps> = ({
  isOpen,
  menuRef,
  openItems,
  toggleSubMenu,
  localeSwitcherVisible,
  isMobile,
  containerClassName = "block px-4 mx-4 flex flex-col",
  itemClassName = "flex flex-col items-start px-4 py-8 text-lg",
  buttonClassName = "text-lg",
  subMenuClassName = "mt-2",
  navItemClassName = "no-underline",
  arrowIconClassName = "transition-transform duration-300",
}) => {
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, isMobile]);

  return (
    <div
      ref={menuRef}
      className={`md:hidden fixed top-32 inset-x-0 bg-white-text border-b-2 border-gray-600 z-20 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        maxHeight: "calc(100vh - 8rem)",
        overflowY: "auto",
      }}
    >
      {localeSwitcherVisible && <LocaleSwitcher isMobile={true} />}

      {MENU_LIST.map(({ href, text, subMenu }, index) => (
        <div key={index} className={containerClassName}>
          <div
            className={`${itemClassName} ${
              index !== MENU_LIST.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div className="w-full flex items-center justify-between text-lg hover:text-dark-red">
              <NavItem href={href} text={text} classname={navItemClassName} />
              {subMenu && (
                <button
                  onClick={() => toggleSubMenu(index)}
                  className={buttonClassName}
                >
                  <Image
                    alt="arrow"
                    src={arrowIcon.src}
                    width={12}
                    height={10}
                    className={`${arrowIconClassName} ${
                      openItems[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {openItems[index] && subMenu && (
              <div className={subMenuClassName}>
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
  );
};

export default MobileNavMenu;
