import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import PerfilIngrid from "./img/perfil.jpg";
import PerfilDudu from "./img/dudu.jfif";
import Post1 from "./img/batatinha.jpg";
import Post2 from "./img/guadalupe.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={"ingrid"}
          fotoUsuario={PerfilIngrid}
          fotoPost={Post1}
        />
        <Post nomeUsuario={"dudu"} fotoUsuario={PerfilDudu} fotoPost={Post2} />
      </MainContainer>
    );
  }
}

export default App;
