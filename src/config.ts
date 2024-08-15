import { Pathnames } from "next-intl/navigation";

const DEFAULT_PORT: string = "3000";

export const port: string = process.env.PORT || DEFAULT_PORT;

export const defaultLocale: string = "en" as const;
export const locales: string[] = ["en", "ru"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    ru: "/pfadnamen",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
