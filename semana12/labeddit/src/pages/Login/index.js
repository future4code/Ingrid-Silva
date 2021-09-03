import React, { useState } from "react";
import LoginButton from "../../components/LoginButton";
import { useForm, useUnprotectedPage } from "../../utils/hooks";

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
import { login } from "../../services/auth";
import { Link, useHistory } from "react-router-dom";
import Loader from "../../components/Loader";

function Login() {
  useUnprotectedPage();
  const history = useHistory();
  const [fields, setFields, clear] = useForm({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const goToFeed = () => {
    history.push("/feed");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const body = {
      email: fields.email,
      password: fields.password,
    };

    try {
      setIsLoading(true);
      const { data } = await login(body);
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
        <Title>Entrar</Title>
        <Description>
          Ao continuar, você concorda com nossos Termos de Uso e nossa Política
          de Privacidade.
        </Description>
        <InputContainer onSubmit={handleLogin}>
          <Label>E-MAIL</Label>
          <Input
            type="email"
            name="email"
            value={fields.email}
            onChange={setFields}
            required
          />
          <Label>SENHA</Label>

          <Input
            name="password"
            type="password"
            value={fields.password}
            onChange={setFields}
            required
          />
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? <Loader /> : "Entrar"}
          </LoginButton>
        </InputContainer>

        <Message>
          Primeira vez no LabEddit? <Link to="/register">CADASTRAR-SE</Link>
        </Message>
      </LeftSide>
    </Container>
  );
}

export default Login;
