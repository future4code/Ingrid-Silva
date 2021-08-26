import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";

import { Button, TripIcon } from "../Home/styles";
import { BackButton } from "../Login/styles";
import {
  Title,
  TripsContainer,
  Trip,
  Main,
  Duration,
  TripName,
  Destination,
  Description,
  Date,
  Content,
} from "./styles";

export default function ListTrips(props) {
  useEffect(() => {
    props.getTrips();
  }, [props]);

  const renderTrips = () =>
    props.trips.map((trip) => {
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

          <Button to={`/trips/${trip.id}/application`}>
            Inscrever-se
            <TripIcon />
          </Button>
        </Trip>
      );
    });

  return (
    <Main>
      <Title>Lista de viagens</Title>

      <TripsContainer>{renderTrips()}</TripsContainer>

      <BackButton to={"/"}>
        <BsChevronLeft />
        Voltar
      </BackButton>
    </Main>
  );
}
