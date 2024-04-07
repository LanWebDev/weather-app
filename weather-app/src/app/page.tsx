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
        <div className="flex justify-evenly">
          <section className=" flex flex-col justify-center items-center h-[90vh]">
            <SearchBar />
            <LocationData />
          </section>
          <section className="w-[50%]">
            <PlaceData />
          </section>
        </div>
      </main>
    </>
  );
}
