import Image from "next/image";

import openMenu from "@/public/openBar.svg";
import closeMenu from "@/public/Close.svg";

import {
  MENU_BUTTON_ALT,
  MENU_BUTTON_TEXT,
} from "@/src/constants/menu-button-literals";
import { IMenuButtonProps } from "../menu-buttn/types";

const MenuButton: React.FC<IMenuButtonProps> = ({
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
        alt={isOpen ? MENU_BUTTON_ALT.CLOSE : MENU_BUTTON_ALT.OPEN}
        className={iconClassName}
      />
      <span className={textClassName}>
        {isOpen ? MENU_BUTTON_TEXT.CLOSE : MENU_BUTTON_TEXT.OPEN}
      </span>
    </button>
  </div>
);

export default MenuButton;
