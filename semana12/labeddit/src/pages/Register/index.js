import React from "react";
import LoginButton from "../../components/LoginButton";
import { useForm, useUnprotectedPage } from "../../utils/hooks";
import { register } from "../../services/auth";

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
import { Link } from "react-router-dom";

function Register() {
  useUnprotectedPage();
  const [fields, setFields, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    const body = {
      username: fields.username,
      email: fields.email,
      password: fields.password,
    };

    try {
      const { data } = await register(body);
      clear();
    } catch (e) {
      console.log("Não deu certo", { ...e });
    }
  };

  return (
    <Container>
      <RightSide />

      <LeftSide>
        <Title>Cadastrar-se</Title>
        <Description>
          Ao continuar, você concorda com nossos Termos de Uso e nossa Política
          de Privacidade.
        </Description>
        <InputContainer onSubmit={handleRegister}>
          <Label>NOME DE USUÁRIO</Label>
          <Input
            type="text"
            name="username"
            value={fields.username}
            onChange={setFields}
            required
          />
          <Label>EMAIL</Label>
          <Input
            type="email"
            name="email"
            value={fields.email}
            onChange={setFields}
            required
          />
          <Label>SENHA</Label>
          <Input
            type="password"
            name="password"
            value={fields.password}
            onChange={setFields}
            required
          />

          <LoginButton>Cadastrar</LoginButton>
        </InputContainer>

        <Message>
          Já está no LabEddit? <Link to="/">ENTRAR</Link>
        </Message>
      </LeftSide>
    </Container>
  );
}

export default Register;
