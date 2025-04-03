"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { useLegalModal } from "./LegalModal";

export const ModalContext = createContext<{
  setShowLegalModal: Dispatch<SetStateAction<boolean>>;
}>({
  setShowLegalModal: () => {},
});

export default function ModalProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { setShowLegalModal, LegalModal, showLegalModal } = useLegalModal();
  return (
    <ModalContext.Provider value={{ setShowLegalModal }}>
      {showLegalModal && <LegalModal />}
      {children}
    </ModalContext.Provider>
  );
}
