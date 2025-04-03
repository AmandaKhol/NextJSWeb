import { getTranslations } from "next-intl/server";
import { foodData } from "../_data/data";
import Image from "next/image";

type DetailProps = {
  searchParams: { id: number };
};

export default async function Detail({ searchParams }: DetailProps) {
  const searchId = await searchParams;
  const item = foodData[searchId.id];
  const { name, link, state, alergies } = item;
  const t = await getTranslations("detail");

  const alergiesList = alergies.map((alergie, index) => (
    <li key={index}>{t(`${alergie}`)}</li>
  ));

  return (
    <div className="flex flex-col items-center flex-grow">
      <h1 className="p-2">&quot;{name}&quot;</h1>
      <div className="flex mt-5 flex-col sm:flex-row">
        <Image src={link} alt={name} width={300} height={300} />
        <div className="m-5 flex flex-col justify-center">
          <p>{state && t(`${state}`)}</p>
          <div>
            {t(`title`)}
            <ul className="list-disc list-inside">{alergiesList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
