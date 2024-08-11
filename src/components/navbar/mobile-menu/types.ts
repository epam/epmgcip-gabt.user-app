import { RefObject } from "react";

export interface IMobileNavMenuProps {
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement>;
  openItems: Record<number, boolean>;
  toggleSubMenu: (index: number) => void;
  containerClassName?: string;
  itemClassName?: string;
  buttonClassName?: string;
  subMenuClassName?: string;
  navItemClassName?: string;
  arrowIconClassName?: string;
  localeSwitcherVisible?: boolean;
}
