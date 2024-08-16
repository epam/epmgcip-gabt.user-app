export interface IMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}
