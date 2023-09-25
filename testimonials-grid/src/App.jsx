import Article1 from "./components/Article-1";
import Article2 from "./components/Article-2";
import Article3 from "./components/Article-3";
import Article4 from "./components/Article-4";
import Article5 from "./components/Article-5";
import Layout from "./components/Layout";

export default function App() {
  return (
    <main className="bg-[hsl(210,46%,95%)] font-BarlowSemiCondensed h-full w-full   ">
      <Layout>
        <Article1 />
        <Article2 />
        <Article3 />
        <Article4 />
        <Article5 />
      </Layout>
    </main>
  );
}
