interface IFooterLink {
  text: string;
  href: string;
}

export const FOOTER_SECTION_ONE: IFooterLink[] = [
  { text: "Contact Us", href: "/contact" },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "Terms of Service", href: "/terms" },
  { text: "Support", href: "/support" },
];

export const FOOTER_SECTION_TWO: IFooterLink[] = [
  { text: "Company History", href: "/history" },
  { text: "Careers", href: "/careers" },
  { text: "Press Releases", href: "/press" },
  { text: "Media Kit", href: "/media-kit" },
];

export const FOOTER_SECTION_THREE: IFooterLink[] = [
  { text: "Blog", href: "/blog" },
  { text: "Newsletter", href: "/newsletter" },
  { text: "Community", href: "/community" },
  { text: "FAQs", href: "/faqs" },
];
