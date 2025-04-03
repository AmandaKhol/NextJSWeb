import { foodData } from "./_data/data";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  const images = foodData;

  if (!images) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
      <Gallery images={images} />
    </div>
  );
}
