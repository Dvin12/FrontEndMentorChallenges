import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Back from "./components/Back";
import Total from "./components/Total";
import Reward from "./components/Reward";

export default function App() {
  return (
    <Main>
      <Header />
      <Nav />
      <Section>
        <Back />
        <Total />
        <Reward />
      </Section>
    </Main>
  );
}
