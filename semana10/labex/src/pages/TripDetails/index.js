import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {
  Content,
  Date,
  Description,
  Destination,
  Duration,
} from "../ListTrips/styles";

import { BackButton, ButtonContainer } from "../Login/styles";
import { BsChevronLeft } from "react-icons/bs";
import { Button } from "../Home/styles";

import {
  TripContainer,
  TripName,
  Container,
  CandidateContainer,
  Candidate,
  Title,
  Approved,
} from "./styles";

export const useProtectedPage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) return;

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    } else {
      setIsLogged(true);
    }
  }, [history, isLogged]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return { isLogged, logout };
};

export default function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  const token = localStorage.getItem("token");

  useProtectedPage();

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
      })
      .catch((error) => {
        console.log("deu erro", error.response);
      });
  }, []);

  const handleCandidates = (candidateId, approve) => {
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/trips/${id}/candidates/${candidateId}/decide`,
        { approve: approve },
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then(() => {
        const updatedTrip = { ...trip };

        const candidateIndex = updatedTrip.candidates.findIndex(
          (candidate) => candidate.id === candidateId
        );
        const [candidate] = updatedTrip.candidates.splice(candidateIndex, 1);

        if (approve) {
          updatedTrip.approved.push(candidate);
        }

        setTrip(updatedTrip);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const renderCandidatesApproved = () => {
    return trip.approved.map((candidate) => {
      return <li>{candidate.name}</li>;
    });
  };

  const getCandidates = () => {
    if (!trip?.candidates?.length) {
      return <p>Não há candidatos para essa viagem</p>;
    }

    return trip?.candidates?.map((candidate) => {
      return (
        <Candidate key={candidate.id}>
          <p>
            <span>Nome:</span>
            {candidate.name}
          </p>
          <p>
            <span>Idade:</span>
            {candidate.age}
          </p>
          <p>
            <span>Profissão:</span>
            {candidate.profession}
          </p>
          <p>
            <span>País:</span>
            {candidate.country}
          </p>
          <p>
            <span>Texto da candidatura:</span>
            {candidate.applicationText}
          </p>
          <ButtonContainer>
            <Button
              as="button"
              onClick={() => handleCandidates(candidate.id, true)}
            >
              Aprovar
            </Button>
            <Button
              as="button"
              onClick={() => handleCandidates(candidate.id, false)}
            >
              Reprovar
            </Button>
          </ButtonContainer>
        </Candidate>
      );
    });
  };

  if (!trip) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <TripContainer>
        <Content>
          <TripName>{trip.name}</TripName>
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
      </TripContainer>
      <Title>Candidatos pendentes</Title>
      <CandidateContainer>{getCandidates()}</CandidateContainer>

      <Title>Candidatos Aprovados</Title>

      <Approved>{renderCandidatesApproved()}</Approved>
      <BackButton to="/admin/trips">
        <BsChevronLeft />
        Voltar
      </BackButton>
    </Container>
  );
}
