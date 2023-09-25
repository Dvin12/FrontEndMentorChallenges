import Background from "./components/Background";
import CardStorage from "./components/CardStorage";
import CardUI from "./components/CardUI";
import Cards from "./components/Cards";

export default function App() {
  return (
    <main className="bg-[hsl(229,57%,11%)] h-screen font-Raleway relative">
      <Cards>
        <CardUI />
        <CardStorage />
      </Cards>
      <Background />
    </main>
  );
}
