import React from "react";
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

function Login() {
  useUnprotectedPage();
  const history = useHistory();
  const [fields, setFields, clear] = useForm({
    email: "",
    password: "",
  });

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
      const { data } = await login(body);
      localStorage.setItem("token", data.token);
      goToFeed();
      console.log("Deu certo", data);
      clear();
    } catch (e) {
      console.log("Não deu certo", { ...e });
      alert("Erro no login");
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
          <LoginButton type="submit">Entrar</LoginButton>
        </InputContainer>

        <Message>
          Primeira vez no LabEddit? <Link to="/register">CADASTRAR-SE</Link>
        </Message>
      </LeftSide>
    </Container>
  );
}

export default Login;
