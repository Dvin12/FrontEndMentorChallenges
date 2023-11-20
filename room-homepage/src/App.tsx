import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Section from "./components/Section";

export default function App(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <Header />
      <Section />
    </Main>
  );
}
