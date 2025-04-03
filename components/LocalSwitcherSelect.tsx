"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { Locale } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

const LocalSwitcherSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLocaleChange = (localSelected: string) => {
    const id = searchParams.get("id");
    const newQuery = { ...Object.fromEntries(searchParams.entries()) };
    if (id) {
      newQuery.id = id;
    }
    router.replace(
      { pathname, query: newQuery },
      { locale: localSelected as Locale }
    );
  };

  return (
    <div className=" w-full flex justify-end space-x-2 text-sm sm:text-lg text-gray-500 pr-10 pt-5">
      <button onClick={() => handleLocaleChange("es")}>ES</button>
      <span>/</span>
      <button onClick={() => handleLocaleChange("en")}>EN</button>
    </div>
  );
};

export default LocalSwitcherSelect;
