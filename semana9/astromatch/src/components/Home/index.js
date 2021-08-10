import React from "react";
import {
  IconeTinder,
  Container,
  Image,
  Button,
  Matches,
  BoxBtn,
} from "./styles";
import Logo from "../../assets/images/tinder-1.svg";

function Home(props) {
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
      </BoxBtn>
    </Container>
  );
}

export default Home;
