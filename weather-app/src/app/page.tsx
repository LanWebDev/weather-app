import Menu from "@/components/Menu";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section className="my-32">
          <SearchBar />
        </section>
      </main>
    </>
  );
}
