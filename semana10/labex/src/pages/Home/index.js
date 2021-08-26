import React from "react";

import { Link } from "react-router-dom";

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
            <Button to="/trips">
              Ver viagens disponíveis
              <TripIcon />
            </Button>
            <Button to="/login">
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
