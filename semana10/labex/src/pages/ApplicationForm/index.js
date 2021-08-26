import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  BackButton,
  ButtonContainer,
  Form,
  FormGroup,
  Input,
  Label,
} from "../Login/styles";
import countries from "../../assets/countries.json";
import { Container, Check } from "./styles";
import { Title } from "../ListTrips/styles";
import { Button } from "../Home/styles";
import { BsChevronLeft } from "react-icons/bs";

const INITIAL_FORM_DATA = {
  age: "",
  name: "",
  country: "",
  profession: "",
  applicationText: "",
};

export default function ApplicationForm(props) {
  const [trip, setTrip] = useState({});
  const { id } = useParams();

  const [userInformation, setUserInformation] = useState({
    ...INITIAL_FORM_DATA,
  });

  const getTripDetails = useCallback(() => {
    const token = localStorage.getItem("token");

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
      });
  }, [id]);

  const handleInputChange = (event) => {
    setUserInformation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNumberInputChange = (event) => {
    setUserInformation((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/trips/${id}/apply`,
        userInformation,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        alert(`Parabéns! Você se inscreveu para a viagem!`);
      })
      .catch((error) => {
        console.log("não deu", error);
      });

    setUserInformation({ ...INITIAL_FORM_DATA });
  };

  useEffect(() => {
    getTripDetails();
  }, [getTripDetails]);

  if (!trip) {
    return <p>Erro ao buscar a viagem</p>;
  }

  return (
    <Container>
      <Title>Inscrição para a viagem</Title>

      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label forHtml="name">Nome</Label>
          <Input
            id="name"
            type="text"
            minLength="3"
            required
            name="name"
            value={userInformation.name}
            placeholder="Digite o seu nome"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label forHtml="age">Idade</Label>
          <Input
            id="age"
            required
            min="18"
            name="age"
            type="number"
            value={userInformation.age}
            placeholder="Digite a sua idade"
            onChange={handleNumberInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label forHtml="text">Texto de candidatura</Label>
          <Input
            id="text"
            required
            type="text"
            minLength="10"
            as="textarea"
            placeholder="Conte para nós por que gostaria de participar dessa viagem"
            name="applicationText"
            value={userInformation.applicationText}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label forHtml="profession">Profissão</Label>
          <Input
            id="profession"
            type="text"
            required
            placeholder="Qual é a sua profissão?"
            name="profession"
            value={userInformation.profession}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Escolha um país</Label>
          <select
            required
            name="country"
            value={userInformation.country}
            onChange={handleInputChange}
          >
            <option value="">Escolha um país</option>
            {countries.map((country) => (
              <option key={country.sigla} value={country.nome_pais}>
                {country.nome_pais}
              </option>
            ))}
          </select>
        </FormGroup>
        <ButtonContainer>
          <BackButton to="/trips">
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
