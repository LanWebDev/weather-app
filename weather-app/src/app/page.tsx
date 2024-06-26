import PlaceData from "@/components/Forecast/Forecast";
import SearchBar from "@/components/ui/SearchBar";
import HeaderButtons from "@/components/ui/HeaderButtons";
import Temperature from "@/components/Temperature";

export const metadata = {
  title: "Weather app",
  description: "Weather app",
  keywords: ["Weather", "Weather App"],
};

export default function Home() {
  return (
    <>
      <HeaderButtons />
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
