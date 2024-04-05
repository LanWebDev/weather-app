import Menu from "@/components/Menu";
import PlaceData from "@/components/PlaceData";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section>
          <SearchBar />
        </section>
        <section>
          <PlaceData />
        </section>
      </main>
    </>
  );
}
