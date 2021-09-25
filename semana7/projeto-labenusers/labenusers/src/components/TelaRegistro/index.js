import axios from "axios";
import React, { Component } from "react";
import {
  Form,
  Input,
  InputGroup,
  Label,
  Button,
  Titulo,
  Container,
} from "./styles";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "ingrid-silva-lovelace",
  },
};

export default class TelaRegistro extends Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  handleInputName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  addUser = (event) => {
    event.preventDefault();

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(url, body, headers)
      .then(() => {
        alert("Usuário criado com sucesso");
        this.setState({ inputName: "", inputEmail: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  render() {
    return (
      <Container>
        <Titulo>LabeUsers Form</Titulo>
        <Form onSubmit={this.addUser}>
          <InputGroup>
            <Label>Nome:</Label>
            <Input
              placeholder="Digite o seu nome"
              value={this.state.inputName}
              onChange={this.handleInputName}
            />
          </InputGroup>
          <InputGroup>
            <Label>E-mail:</Label>
            <Input
              placeholder="Digite o seu e-mail"
              value={this.state.inputEmail}
              onChange={this.handleInputEmail}
            />
          </InputGroup>
          <Button>Salvar</Button>
        </Form>
      </Container>
    );
  }
}
