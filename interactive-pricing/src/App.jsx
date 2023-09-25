import Header from "./components/Header";
import PricingComponent from "./components/PricingComponent";

export default function App() {
  return (
    <main className=" font-Manrope">
      <img
        src="./assets/images/bg-pattern.svg"
        alt=""
        className="md:w-screen   md:h-fit h-[500px] w-full fixed z-0 "
      />
      <Header />
      <PricingComponent></PricingComponent>
    </main>
  );
}
