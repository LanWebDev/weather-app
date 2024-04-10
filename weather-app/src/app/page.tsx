import PlaceData from "@/components/Forecast/Forecast";
import SearchBar from "@/components/ui/SearchBar";
import UnitsChange from "@/components/ui/UnitsChange";
import Temperature from "@/components/Temperature";

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
            <Temperature />
          </section>
          <section>
            <PlaceData />
          </section>
        </div>
      </main>
    </>
  );
}
