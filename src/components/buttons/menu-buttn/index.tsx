import { FC } from "react";
import Image from "next/image";

import openMenu from "@/public/openBar.svg";
import closeMenu from "@/public/Close.svg";

import { IMenuButtonProps } from "../menu-buttn/types";

const MenuButton: FC<IMenuButtonProps> = ({
  isOpen,
  toggleMenu,
  buttonRef,
  className = "text-2xl flex items-center",
  iconClassName = "",
  textClassName = "ml-2 text-lg",
}) => (
  <div className="h-full w-1/3 flex items-center mx-4 md:justify-center md:hidden">
    <button ref={buttonRef} onClick={toggleMenu} className={className}>
      <Image
        src={isOpen ? closeMenu : openMenu}
        alt={isOpen ? "Close menu" : "Open menu"}
        className={iconClassName}
      />
      <span className={textClassName}>{isOpen ? "Close" : "MENU"}</span>
    </button>
  </div>
);

export default MenuButton;
