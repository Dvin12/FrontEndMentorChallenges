import { useState } from "react";
import Article from "./components/Article";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Links from "./components/Links";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Shortener from "./components/Shortener";

export default function App() {
  const [input, setInput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Main>
      <Navigation />
      <Header />
      <Section>
        <Shortener
          setInput={setInput}
          input={input}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
        <Links input={input} isLoading={isLoading} />
        <Article />
        <Banner />
      </Section>
      <Footer />
    </Main>
  );
}
