import Clipboard from "./components/Clipboard";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Snippets from "./components/Snippets";

export default function App() {
  return (
    <Main>
      <Header />
      <Section>
        <Snippets />
        {/* <Clipboard /> */}
        {/* <Download /> */}
      </Section>
      {/* <Footer /> */}
    </Main>
  );
}
