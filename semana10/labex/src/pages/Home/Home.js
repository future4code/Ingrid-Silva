import React from "react";

import {
  Container,
  Button,
  TripIcon,
  AdminIcon,
  RocketContainer,
  ButtonContainer,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <RocketContainer>
        <h1>LabeX<br/>Viagens Espaciais</h1>
      </RocketContainer>
      <ButtonContainer>
        <Button>
          Ver viagens disponíveis
          <TripIcon />
        </Button>
        <Button>
          Entrar como administrador
          <AdminIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
