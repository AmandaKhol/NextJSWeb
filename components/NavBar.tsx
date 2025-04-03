"use client";

import { Link, PagesName, usePathname } from "@/i18n/routing";
import LocalSwitcherSelect from "./LocalSwitcherSelect";
import Image from "next/image";
import logo from "../public/logo_small.jpg";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations("header");

  const pathname = usePathname();

  return (
    <div className="w-full min-h-[50px] sm:min-h-[100px] flex flex-col justify-center items-center">
      <LocalSwitcherSelect />
      <div className="max-w-[130px] sm:max-w-[150px] mt-5">
        <Link href={PagesName.main}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex justify-between space-x-4 my-5">
        <Link
          href={PagesName.vegan}
          className={`text-lg sm:text-xl ${
            pathname === PagesName.vegan ? "underline underline-offset-8" : ""
          } `}
        >
          {t("link2")}
        </Link>
        <Link
          href={PagesName.vegetarian}
          className={`text-lg sm:text-xl ${
            pathname === PagesName.vegetarian
              ? "underline underline-offset-8"
              : ""
          } `}
        >
          {t("link3")}
        </Link>
        <Link
          href={PagesName.about}
          className={`text-lg sm:text-xl ${
            pathname === PagesName.about ? "underline underline-offset-8" : ""
          } `}
        >
          {t("link1")}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
