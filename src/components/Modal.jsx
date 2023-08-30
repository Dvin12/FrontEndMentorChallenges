import Pledge from "./Pledge";
import Success from "./Success";

export default function Modal({ setActiveModal }) {
  return (
    <section className="absolute top-0 z-50 w-full h-full px-6 bg-black bg-opacity-40">
      <Pledge setActiveModal={setActiveModal} />
      {/* <Success /> */}
    </section>
  );
}
