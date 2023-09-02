import Article from "./components/Article";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Section from "./components/Section";
import TextBlock from "./components/TextBlock";

export default function App() {
  return (
    <Main>
      <Header>
        <Nav />
        <TextBlock />
      </Header>
      <Section>
        <Article />
        {/* <Creations /> */}
      </Section>
      {/* <Footer /> */}
    </Main>
  );
}
