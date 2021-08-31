import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import PostsProvider from "./store/PostsProvider";

function App() {
  return (
    <PostsProvider>
      <GlobalStyle />
      <Router />
    </PostsProvider>
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
