import Main from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import BulletPoints from "./components/BulletPoints";
import Article from "./components/Article";

export default function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <Section>
        <BulletPoints />
        <Article />
        <Testimonials />
        <NewsLetter />
      </Section>
      <Footer />
    </Main>
  );
}
