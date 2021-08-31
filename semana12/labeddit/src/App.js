import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #dae0e6;
    padding: 30px;
  }
`;

export default App;
