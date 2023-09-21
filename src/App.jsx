import Background from "./components/Background";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Main from "./components/Main";
import Manage from "./components/Manage";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <Section>
        <Manage />
        <Testimonials />
        <GetStarted />
      </Section>
      <Footer />
      <Background />
    </Main>
  );
}
