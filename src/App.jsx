import Main from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Section";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Main>
      <Header />
      <Section>
        <Articles></Articles>
      </Section>
      <Footer />
    </Main>
  );
}
