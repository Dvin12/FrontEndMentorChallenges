import Main from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Section";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Main>
      <Header />
      <Section>
        <Article></Article>
      </Section>
      <Footer />
    </Main>
  );
}
