import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button, ButtonContainer } from "../Home/styles";
import { Title, TripsContainer, Trip, Main } from "./styles";

export default function ListTrips() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/trips",
        {
          header: {
            aluno: "ingrid",
          },
        }
      )
      .then((response) => {
        console.log("foi", response.data);
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log("não foi", error.response);
      });
  }, []);

  console.log({ trips });

  const renderTrips = () =>
    trips.map((trip) => {
      return (
        <Trip key={trip.id}>
          <p>{trip.name}</p>
          <p>Destino:{trip.planet}</p>
          <p>Descrição:{trip.description}</p>
          <p>Data:{trip.date}</p>
          <p>Duração:{trip.durationInDays}</p>
          <Button>Inscrever-se</Button>
        </Trip>
      );
    });

  return (
    <Main>
      <Title>Lista de viagens</Title>

      <TripsContainer>{renderTrips()}</TripsContainer>

      <Button>Voltar</Button>
    </Main>
  );
}
