"use client";

import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

export const LegalModalComponent = ({
  setShowLegalModal,
}: {
  setShowLegalModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const t = useTranslations("legal");
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 
          transition-opacity duration-1000 flex sm:justify-center sm:items-center`}
    >
      <div
        className={`w-full bg-white p-4 flex flex-col rounded shadow-lg overflow-y-auto transition-opacity duration-1000 
            sm:w-[500px] sm:h-[500px] sm:items-center`}
      >
        <button
          onClick={() => setShowLegalModal(false)}
          className="self-end text-lg font-bold"
        >
          X
        </button>
        <div className="mt-2 overflow-y-auto w-full">
          <h2 className="text-center uppercase font-bold mb-3 text-xl">{t("main_title")}</h2>
          <h3 className="my-2 font-bold text-base">{t("title_1")}</h3>
          <p className="text-sm text-justify">{t("description_1")}</p>
        </div>
      </div>
    </div>
  );
};
export function useLegalModal() {
  const [showLegalModal, setShowLegalModal] = useState(false);

  const LegalModal = () => {
    return <LegalModalComponent setShowLegalModal={setShowLegalModal} />;
  };

  return { setShowLegalModal, showLegalModal, LegalModal };
}
