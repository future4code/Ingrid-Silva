import React, { useEffect } from "react";
import { Button } from "../Home/styles";
import { BackButton, ButtonContainer } from "../Login/styles";

import {
  Container,
  TripCard,
  TripsContainer,
  TripName,
  Trash,
  Plus,
} from "./styles";

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
          <TripName>{trip.name}</TripName>
          <div style={{ display: "flex" }}>
            <Button to={`/admin/trips/${trip.id}`}>
              <Plus />
              Detalhes
            </Button>
            <Trash onClick={() => deleteTrip(trip.id)} />
          </div>
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
