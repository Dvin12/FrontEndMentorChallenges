import Footer from "./components/Footer";
import Header from "./components/Header";
import Images from "./components/Images";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <Section />
      <Testimonials />
      <Images />
      <Footer />
    </Main>
  );
}
