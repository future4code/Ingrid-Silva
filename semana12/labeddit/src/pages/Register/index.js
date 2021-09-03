import React, { useState } from "react";
import LoginButton from "../../components/LoginButton";
import { useForm, useUnprotectedPage } from "../../utils/hooks";
import { register } from "../../services/auth";
import Loader from "../../components/Loader";

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
import { Link, useHistory } from "react-router-dom";

function Register() {
  useUnprotectedPage();
  const history = useHistory();
  const [fields, setFields, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const goToFeed = () => {
    history.push("/feed");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const body = {
      username: fields.username,
      email: fields.email,
      password: fields.password,
    };

    try {
      setIsLoading(true);
      const { data } = await register(body);
      localStorage.setItem("token", data.token);
      goToFeed();
      clear();
    } catch (e) {
      console.log("Não deu certo", { ...e });
    } finally {
      setIsLoading(false);
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

          <LoginButton type="submit">
            {isLoading ? <Loader /> : "Cadastrar"}
          </LoginButton>
        </InputContainer>

        <Message>
          Já está no LabEddit? <Link to="/">ENTRAR</Link>
        </Message>
      </LeftSide>
    </Container>
  );
}

export default Register;
