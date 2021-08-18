import React, { useEffect } from "react";
import { Button } from "../Home/styles";
import {
  Content,
  Date,
  Description,
  Destination,
  Duration,
  Trip,
  TripName,
  TripsContainer,
} from "../ListTrips/styles";
import { BackButton, ButtonContainer } from "../Login/styles";

import { Container } from "./styles";

import { useProtectedPage } from "../TripDetails/index";

const AdminHome = ({ getTrips, trips }) => {
  const { isLogged } = useProtectedPage();

  useEffect(() => {
    if (isLogged) getTrips();
  }, [isLogged, getTrips]);

  if (!isLogged) return null;

  const renderTrips = () =>
    trips.map((trip) => {
      return (
        <Trip key={trip.id}>
          <TripName>{trip.name}</TripName>
          <Content>
            <Destination>
              <span>Destino:</span>
              {trip.planet}
            </Destination>
            <Description>
              <span>Descrição:</span>
              {trip.description}
            </Description>
            <Date>
              <span>Data:</span>
              {trip.date}
            </Date>
            <Duration>
              <span>Duração:</span>
              {trip.durationInDays} dias
            </Duration>
          </Content>
        </Trip>
      );
    });

  return (
    <Container>
      <h1>Painel administrativo</h1>

      <TripsContainer>{renderTrips()}</TripsContainer>

      <ButtonContainer>
        <BackButton to={"/"}>Voltar</BackButton>
        <Button>Criar nova viagem</Button>
        <Button>Sair</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AdminHome;
