import axios from "axios";
import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Check, Container } from "../ApplicationForm/styles";
import { Button } from "../Home/styles";
import { Title } from "../ListTrips/styles";
import {
  BackButton,
  ButtonContainer,
  Form,
  FormGroup,
  Input,
  Label,
} from "../Login/styles";
import { useProtectedPage } from "../TripDetails";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const INITIAL_FORM_DATA = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
};

export default function CreateTrip() {
  const { isLogged } = useProtectedPage();

  const [tripInformation, setTripInformation] = useState({
    ...INITIAL_FORM_DATA,
  });

  const handleInputChange = (event) => {
    setTripInformation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNumberInputChange = (event) => {
    setTripInformation((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const handleDateChange = (date) => {
    setTripInformation((prev) => ({
      ...prev,
      date: date,
    }));
  };

  const handleTripSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/trips",
        tripInformation,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then(() => alert("Nova Trip criada!"))
      .catch((error) => {
        console.log(error.response);
        alert("Não deu!");
      });
    setTripInformation({ ...INITIAL_FORM_DATA });
  };

  if (!isLogged) return null;
  return (
    <Container>
      <Title>Criar nova viagem</Title>
      <Form onSubmit={handleTripSubmit}>
        <FormGroup>
          <Label>Título da viagem</Label>
          <Input
            placeholder="Digite o título da viagem"
            name="name"
            value={tripInformation.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Destino</Label>

          <select
            name="planet"
            value={tripInformation.planet}
            onChange={handleInputChange}
          >
            <option>Escolha um planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label>Data</Label>
          <DatePicker
            selected={tripInformation.date}
            onChange={handleDateChange}
            name="date"
          />
        </FormGroup>
        <FormGroup>
          <Label>Descrição</Label>
          <Input
            name="description"
            value={tripInformation.description}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Duração em dias</Label>
          <Input
            name="durationInDays"
            value={tripInformation.durationInDays}
            onChange={handleNumberInputChange}
          />
        </FormGroup>
        <ButtonContainer>
          <BackButton to="/admin/trips">
            <BsChevronLeft />
            Voltar
          </BackButton>

          <Button as="button">
            Enviar
            <Check />
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
