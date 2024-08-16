interface ISubMenuItem {
  text: string;
  href: string;
}

interface IMenuItem {
  text: string;
  href: string;
  subMenu: ISubMenuItem[];
}

export const MENU_LIST: IMenuItem[] = [
  {
    text: "Home",
    href: "/",
    subMenu: [
      { text: "Sub Home 1", href: "/sub-home1" },
      { text: "Sub Home 2", href: "/sub-home2" },
      { text: "Sub Home 3", href: "/sub-home3" },
      { text: "Sub Home 4", href: "/sub-home4" },
      { text: "Sub Home 5", href: "/sub-home5" },
    ],
  },
  {
    text: "News",
    href: "/news",
    subMenu: [
      { text: "Sub Home 6", href: "/sub-home1" },
      { text: "Sub Home 7", href: "/sub-home2" },
      { text: "Sub Home 8", href: "/sub-home3" },
      { text: "Sub Home 9", href: "/sub-home4" },
      { text: "Sub Home 10", href: "/sub-home5" },
    ],
  },
  {
    text: "About Us",
    href: "/about",
    subMenu: [
      { text: "Sub Home 11", href: "/sub-home1" },
      { text: "Sub Home 12", href: "/sub-home2" },
      { text: "Sub Home 13", href: "/sub-home3" },
      { text: "Sub Home 14", href: "/sub-home4" },
      { text: "Sub Home 15", href: "/sub-home5" },
    ],
  },
  {
    text: "Events",
    href: "/events",
    subMenu: [
      { text: "Sub Home 16", href: "/sub-home1" },
      { text: "Sub Home 17", href: "/sub-home2" },
      { text: "Sub Home 18", href: "/sub-home3" },
      { text: "Sub Home 19", href: "/sub-home4" },
      { text: "Sub Home 20", href: "/sub-home5" },
    ],
  },
];
