import Result from "./Result";
import Summary from "./Summary";

export default function Results({ results }) {
  return (
    <section className="md:w-[760px] md:h-[500px] rounded-3xl bg-white md:grid md:grid-cols-2 shadow-2xl shadow-indigo-300/30">
      <Result />
      <Summary results={results} />
    </section>
  );
}
