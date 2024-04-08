import Menu from "@/components/Menu/Menu";
import PlaceData from "@/components/Forecast/Forecast";
import SearchBar from "@/components/ui/SearchBar";
import UnitsChange from "@/components/ui/UnitsChange";
import LocationData from "@/components/LocationData";

export default function Home() {
  return (
    <>
      <header>
        <UnitsChange />
      </header>
      <main>
        <div className="flex justify-evenly flex-col lg:flex-row">
          <section className=" flex flex-col items-center justify-center">
            <SearchBar />
            <LocationData />
          </section>
          <section>
            <PlaceData />
          </section>
        </div>
      </main>
    </>
  );
}
