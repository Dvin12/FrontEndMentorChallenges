import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Content from "./components/Content";

export default function App() {
  return (
    <Main>
      <Header>
        <Nav />
        <Content />
      </Header>
    </Main>
  );
}
