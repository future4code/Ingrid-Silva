import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import {
  AdminIcon,
  Button,
  Container,
  ContentContainer,
  Illustration,
  RocketContainer,
} from "../Home/styles";

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
              <Input placeholder="Digite seu e-mail" />
            </FormGroup>
            <FormGroup>
              <Label>Senha</Label>
              <Input placeholder="Digite sua senha" />
            </FormGroup>
          </Form>

          <ButtonContainer>
            <BackButton to="/">
              <BsChevronLeft />
              Voltar
            </BackButton>
            <Button to="/admin/trips/create">
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
