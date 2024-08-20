import { Routes } from "@/src/constants/routes";

export interface IQuickLink {
  href: string;
  text: string;
  backgroundImage: string;
  backgroundColor: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat?: string;
  paddingTop?: string;
}

export const QUICK_LINKS: IQuickLink[] = [
  {
    href: Routes.History,
    text: "History",
    backgroundImage: "/QuickLInks1.svg",
    backgroundColor: "bg-light-gold",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  {
    href: Routes.OurTeam,
    text: "Our Team",
    backgroundImage: "/QucikLinks2.svg",
    backgroundColor: "bg-light-almond",
    backgroundSize: "contain",
    backgroundPosition: "center top 20px",
    backgroundRepeat: "no-repeat",
    paddingTop: "10px",
  },
  {
    href: Routes.DressCode,
    text: "Dress Code",
    backgroundImage: "/QuickLinks3.svg",
    backgroundColor: "bg-gold-fusion",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
];
