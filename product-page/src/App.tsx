import Images from "./components/Images";
import Information from "./components/Information";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <main className="font-kumbhSans overflow-hidden">
      <Navigation />
      <section className=" grid grid-cols-1">
        <Images />
        <Information />
      </section>
    </main>
  );
}
