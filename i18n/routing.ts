import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export enum PagesName {
  main = "/",
  about = "/about",
  vegan = "/vegan",
  vegetarian = "/vegetarian",
  details = "/details",
}

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  pathnames: {
    "/about": {
      en: "/about",
      es: "/sobre-mi",
    },
    "/vegan": {
      en: "/vegan",
      es: "/vegano",
    },
    "/vegetarian": "/vegetarian",
    "/": "/",
    "/details": {
      en: "/details",
      es: "/detalles",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
