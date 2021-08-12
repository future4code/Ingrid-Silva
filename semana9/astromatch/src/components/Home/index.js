import React from "react";
import {
  IconeTinder,
  Container,
  Image,
  Button,
  Matches,
  BoxBtn,
  Reset,
} from "./styles";
import Logo from "../../assets/images/tinder-1.svg";
import axios from "axios";

function Home(props) {
  const resetMatches = () => {
    axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ingrid/clear"
    );
  };

  return (
    <Container>
      <Image src={Logo} />
      <BoxBtn>
        <Button onClick={() => props.changePage("cards")}>
          Usar agora
          <IconeTinder />
        </Button>
        <Button onClick={() => props.changePage("matches")}>
          Ver matches
          <Matches />
        </Button>
        <Button onClick={resetMatches}>
          Limpar matches
          <Reset />
        </Button>
      </BoxBtn>
    </Container>
  );
}

export default Home;
