import Main from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Article from "./components/Article";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <Section>
        <Article />
        <Newsletter />
      </Section>
      <Footer />
    </Main>
  );
}
