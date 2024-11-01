export interface ISubMenuItem {
  text: string;
  href: string;
}

export interface IMenuItem {
  text: string;
  href: string;
  subMenu: ISubMenuItem[];
}

export const MENU_LIST: IMenuItem[] = [
  {
    text: "Home",
    href: "/",
    subMenu: [
      { text: "Sub Home 1", href: "/home/sub-home1" },
      { text: "Sub Home 2", href: "/home/sub-home2" },
      { text: "Sub Home 3", href: "/home/sub-home3" },
      { text: "Sub Home 4", href: "/home/sub-home4" },
      { text: "Sub Home 5", href: "/home/sub-home5" },
    ],
  },
  {
    text: "News",
    href: "/news",
    subMenu: [
      { text: "Sub News 1", href: "/news/sub-home1" },
      { text: "Sub News 2", href: "/news/sub-home2" },
      { text: "Sub News 3", href: "/news/sub-home3" },
      { text: "Sub News 4", href: "/news/sub-home4" },
      { text: "Sub News 5", href: "/news/sub-home5" },
    ],
  },
  {
    text: "About Us",
    href: "/about",
    subMenu: [
      { text: "History", href: "/about/history" },
      { text: "Team", href: "/about/team" },
      { text: "Sub About 1", href: "/about/sub-home1" },
      { text: "Sub About 2", href: "/about/sub-home2" },
      { text: "Sub About 3", href: "/about/sub-home3" },
    ],
  },
  {
    text: "Events",
    href: "/events",
    subMenu: [
      { text: "Sub Event 1", href: "/events/sub-home1" },
      { text: "Sub Event 2", href: "/events/sub-home2" },
      { text: "Sub Event 3", href: "/events/sub-home3" },
      { text: "Sub Event 4", href: "/events/sub-home4" },
      { text: "Sub Event 5", href: "/events/sub-home5" },
    ],
  },
];
