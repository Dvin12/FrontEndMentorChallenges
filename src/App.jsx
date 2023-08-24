import Main from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Article from "./components/Article";
import Testimonials from "./components/Testimonials";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <Section>
        <Article />
        {/* <Testimonials />
        <NewsLetter /> */}
      </Section>
      {/* <Footer /> */}
    </Main>
  );
}
