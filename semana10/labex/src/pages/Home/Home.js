import React from "react";

import {
  Container,
  Button,
  TripIcon,
  AdminIcon,
  RocketContainer,
  ButtonContainer,
  Illustration,
  ContentContainer,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <ContentContainer>
        <RocketContainer>
          <h1>LabeX</h1>
          <span>Viagens Espaciais</span>

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
        </RocketContainer>
      </ContentContainer>

      <Illustration />
    </Container>
  );
};

export default Home;
