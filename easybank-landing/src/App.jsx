import Articles from "./components/Articles";
import EasyBank from "./components/EasyBank";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Section from "./components/Section";

export default function App() {
  return (
    <Main>
      <Navigation />
      <Header />
      <Section>
        <EasyBank />
        <Articles />
      </Section>
      <Footer />
    </Main>
  );
}
