import React from "react";
import LoginButton from "../../components/LoginButton";

import {
  Container,
  RightSide,
  LeftSide,
  Title,
  Description,
  InputContainer,
  Label,
  Input,
  Message,
} from "./styles";

function Login() {
  return (
    <Container>
      <RightSide />

      <LeftSide>
        <Title>Entrar</Title>
        <Description>
          Ao continuar, você concorda com nossos Termos de Uso e nossa Política
          de Privacidade.
        </Description>
        <InputContainer>
          <Label>NOME DE USUÁRIO</Label>
          <Input type="text" required />
          <Label>SENHA</Label>

          <Input type="password" required />

          <LoginButton>Entrar</LoginButton>
        </InputContainer>

        <Message>
          Primeira vez no LabEddit? <a href="/register">CADASTRAR-SE</a>
        </Message>
      </LeftSide>
    </Container>
  );
}

export default Login;
