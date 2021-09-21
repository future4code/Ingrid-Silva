import axios from "axios";
import React, { Component } from "react";
import {
  Button,
  Mensagem,
  Dados,
  ContainerDados,
  Edit,
  Cancelar,
  Container,
  Input,
} from "./styles";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "ingrid-silva-lovelace",
  },
};

export default class DetalheUsuario extends Component {
  state = {
    user: null,
    editarUsuario: false,
    novoNome: "",
    novoEmail: "",
  };

  componentDidMount() {
    axios
      .get(`${url}/${this.props.id}`, headers)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  handleToggleEditarUsuario = () => {
    this.setState({
      editarUsuario: !this.state.editarUsuario,
      novoNome: this.state.user.name,
      novoEmail: this.state.user.email,
    });
  };

  handleNewName = (e) => {
    this.setState({ novoNome: e.target.value });
  };

  handleNewEmail = (e) => {
    this.setState({ novoEmail: e.target.value });
  };

  editUser = (e) => {
    e.preventDefault();
    const body = { name: this.state.novoNome, email: this.state.novoEmail };

    axios.put(`${url}/${this.props.id}`, body, headers).then((res) => {
      alert("Dados alterados com sucesso");
      this.setState({
        user: { ...this.state.user, ...body },
        editarUsuario: false,
      });
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.props.clearSelectedUser}>
          Voltar para a listagem
        </Button>

        {!this.state.user ? (
          <Mensagem>Carregando usuário...</Mensagem>
        ) : (
          <Container>
            {this.state.editarUsuario ? (
              <form onSubmit={this.editUser}>
                <Input
                  value={this.state.novoNome}
                  onChange={this.handleNewName}
                  placeholder="Digite o nome"
                />
                <Input
                  value={this.state.novoEmail}
                  onChange={this.handleNewEmail}
                  placeholder="Digite o e-mail"
                />

                <Edit type="button" onClick={this.handleToggleEditarUsuario}>
                  Cancelar
                </Edit>
                <Edit>Salvar</Edit>
              </form>
            ) : (
              <ContainerDados>
                <Dados>{this.state.user.name}</Dados>
                <Dados>{this.state.user.email}</Dados>

                <Edit onClick={this.handleToggleEditarUsuario}>Editar</Edit>
                <Cancelar
                  onClick={() => this.props.deleteUser(this.state.user.id)}
                >
                  X
                </Cancelar>
              </ContainerDados>
            )}
          </Container>
        )}
      </div>
    );
  }
}
