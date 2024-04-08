import Menu from "@/components/Menu/Menu";
import PlaceData from "@/components/Forecast/Forecast";
import SearchBar from "@/components/SearchBar/SearchBar";
import UnitsChange from "@/components/ui/UnitsChange";
import LocationData from "@/components/LocationData";

export default function Home() {
  return (
    <>
      <header>
        <UnitsChange />
      </header>
      <main>
        <div className="flex justify-evenly h-[90vh] flex-col lg:flex-row">
          <section className=" flex flex-col items-center justify-center mx-20">
            <SearchBar />
            <LocationData />
          </section>
          <section className="w-[50%] ">
            <PlaceData />
          </section>
        </div>
      </main>
    </>
  );
}
