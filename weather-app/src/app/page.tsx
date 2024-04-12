import PlaceData from "@/components/Forecast/Forecast";
import SearchBar from "@/components/ui/SearchBar";
import UnitsChange from "@/components/ui/UnitsChange";
import Temperature from "@/components/Temperature";

export const metadata = {
  title: "Weather app",
  description: "Weather app",
  keywords: ["Weather", "Weather App"],
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};

export default function Home() {
  return (
    <>
      <UnitsChange />
      <div className="flex justify-evenly flex-col lg:flex-row ">
        <section className=" flex flex-col items-center justify-center relative ">
          <SearchBar />
          <Temperature />
        </section>
        <section>
          <PlaceData />
        </section>
      </div>
    </>
  );
}
