import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Home from "./components/Home";
import Matches from "./components/Matches";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const changePage = (page) => {
    setPage(page);
  };

  const renderPage = () => {
    switch (page) {
      case "cards":
        return <Cards />;
      case "matches":
        return <Matches changePage={changePage} />;
      default:
        return <Home changePage={changePage} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>{renderPage()}</Container>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    padding: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
