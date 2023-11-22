import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import "./index.css";

export default function App(): JSX.Element {
  return (
    <main>
      <h1 className="title">WE'RE LAUNCHING SOON</h1>
      <Countdown />
      <Footer />
    </main>
  );
}
