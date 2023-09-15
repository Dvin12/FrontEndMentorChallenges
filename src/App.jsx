import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import NewsLetter from "./components/NewsLetter";
import Section from "./components/Section";

export default function App() {
  return (
    <Main>
      <Navigation />
      <Header />
      {/* <Section>
        <Features />
        <Extension />
        <FAQ />
        <NewsLetter />
      </Section>
      <Footer /> */}
    </Main>
  );
}
