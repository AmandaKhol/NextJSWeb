"use client";

import { useContext } from "react";
import { ModalContext } from "./modals/Provider";
import { Link, PagesName } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
  const { setShowLegalModal } = useContext(ModalContext);
  const t = useTranslations("footer");

  return (
    <footer className="p-3 flex flex-col justify-center items-center bg-gray-100 mt-2">
      <div className="space-x-8">
        <button onClick={() => setShowLegalModal(true)}>
          {t("content_1")}
        </button>
        <Link href={PagesName.about}>{t("content_2")}</Link>
      </div>
      <hr className="my-2 w-[300px] border-t border-gray-400" />
      <p> {t("content_3")}</p>
    </footer>
  );
};

export default Footer;
