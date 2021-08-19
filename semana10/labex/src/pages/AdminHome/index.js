import React, { useEffect } from "react";
import { Button } from "../Home/styles";
import { BackButton, ButtonContainer } from "../Login/styles";

import { Container, TripCard, TripsContainer, TripName, Trash } from "./styles";

import { useProtectedPage } from "../TripDetails/index";

const AdminHome = ({ trips, getTrips, deleteTrip }) => {
  const { isLogged, logout } = useProtectedPage();

  useEffect(() => {
    if (isLogged) getTrips();
  }, [isLogged, getTrips]);

  if (!isLogged) return null;

  const renderTrips = () =>
    trips.map((trip) => {
      return (
        <TripCard key={trip.id}>
          <TripName>
            {trip.name}
            <Trash onClick={() => deleteTrip(trip.id)} />
          </TripName>
        </TripCard>
      );
    });

  return (
    <Container>
      <h1>Painel administrativo</h1>

      <TripsContainer>{renderTrips()}</TripsContainer>

      <ButtonContainer>
        <BackButton to="/">Voltar</BackButton>
        <Button to="/createtrip">Criar nova viagem</Button>
        <Button onClick={logout}>Sair</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AdminHome;
