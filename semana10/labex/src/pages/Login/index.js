import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {
  AdminIcon,
  Button,
  Container,
  ContentContainer,
  Illustration,
  RocketContainer,
} from "../Home/styles";
import { useProtectedPage } from "../TripDetails";

import {
  Form,
  Label,
  Input,
  FormGroup,
  ButtonContainer,
  FormTitle,
  BackButton,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLogged } = useProtectedPage();
  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.push("/admin/trips");
    }
  }, [history, isLogged]);

  if (isLogged) return null;

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/login",
        body,
        headers
      )
      .then((response) => {
        console.log("Deu certo", response.data);
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips");
      })
      .catch((error) => {
        console.log("Deu errado", error.response);
      });
  };
  return (
    <Container>
      <ContentContainer>
        <RocketContainer>
          <h1>LabeX</h1>
          <span>Viagens Espaciais</span>

          <Form>
            <FormTitle>Digite seus dados</FormTitle>
            <FormGroup>
              <Label>E-mail</Label>
              <Input
                placeholder="Digite seu e-mail"
                value={email}
                onChange={onChangeEmail}
              />
            </FormGroup>
            <FormGroup>
              <Label>Senha</Label>
              <Input
                placeholder="Digite sua senha"
                value={password}
                onChange={onChangePassword}
              />
            </FormGroup>
          </Form>

          <ButtonContainer>
            <BackButton to="/">
              <BsChevronLeft />
              Voltar
            </BackButton>
            <Button onClick={onSubmitLogin}>
              Entrar
              <AdminIcon />
            </Button>
          </ButtonContainer>
        </RocketContainer>
      </ContentContainer>

      <Illustration />
    </Container>
  );
};

export default Login;
