import React from "react";
import LoginButton from "../../components/LoginButton";
import {
  Container,
  Description,
  Input,
  InputContainer,
  Label,
  LeftSide,
  Message,
  RightSide,
  Title,
} from "../Login/styles";

function Register() {
  return (
    <Container>
      <RightSide />

      <LeftSide>
        <Title>Cadastrar-se</Title>
        <Description>
          Ao continuar, você concorda com nossos Termos de Uso e nossa Política
          de Privacidade.
        </Description>
        <InputContainer>
          <Label>NOME DE USUÁRIO</Label>
          <Input type="text" required />
          <Label>EMAIL</Label>
          <Input type="text" required />
          <Label>SENHA</Label>
          <Input type="password" required />

          <LoginButton>Entrar</LoginButton>
        </InputContainer>

        <Message>
          Já está no LabEddit? <a href="/">ENTRAR</a>
        </Message>
      </LeftSide>
    </Container>
  );
}

export default Register;
