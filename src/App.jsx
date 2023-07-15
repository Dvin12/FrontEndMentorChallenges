import Results from "./components/Results";

const results = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

export default function App() {
  return (
    <section className="bg-sky-100 md:grid md:place-content-center h-screen font-hanken flex flex-col">
      <Results results={results} />
    </section>
  );
}
