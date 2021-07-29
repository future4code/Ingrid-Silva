import axios from "axios";
import React, { Component } from "react";
import DetalheUsuario from "../DetalheUsuario";
import { Form, Input, Button, UserList, RemoveButton, Nome } from "./styles";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "ingrid-silva-lovelace",
  },
};

export default class TelaUsuarios extends Component {
  state = {
    users: [],
    selectedUser: null,
    inputBusca: "",
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  clearSelectedUser = () => {
    this.setState({ selectedUser: null });
    this.fetchUsers();
  };

  deleteUser = (id) => {
    const wantDelete = window.confirm(
      "Você realmente quer deletar esse usuário?"
    );

    if (wantDelete) {
      axios
        .delete(`${url}/${id}`, headers)
        .then(() => {
          this.fetchUsers();
          alert("Usuário deletado com sucesso");

          if (id === this.state.selectedUser) {
            this.clearSelectedUser();
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  handleSelectUser = (id) => {
    this.setState({ selectedUser: id });
  };

  handleInputBusca = (e) => {
    this.setState({ inputBusca: e.target.value });
  };
  searchUser = (e) => {
    e.preventDefault();

    const params = {
      name: this.state.inputBusca,
    };

    console.log(params);

    axios
      .get(`${url}/search`, { params: params, headers: headers.headers })
      .then((response) => {
        this.setState({ users: response.data });
      });
  };

  render() {
    if (this.state.selectedUser !== null) {
      return (
        <DetalheUsuario
          id={this.state.selectedUser}
          deleteUser={this.deleteUser}
          clearSelectedUser={this.clearSelectedUser}
        />
      );
    }

    return (
      <div>
        <Form>
          <Input
            value={this.state.inputBusca}
            onChange={this.handleInputBusca}
            placeholder="Procurar usuário"
          />
          <Button onClick={this.searchUser}>Buscar</Button>
        </Form>

        <div>
          {this.state.users.map((user) => (
            <UserList key={user.id}>
              <Nome onClick={() => this.handleSelectUser(user.id)}>
                {user.name}
              </Nome>
              <RemoveButton onClick={() => this.deleteUser(user.id)}>
                X
              </RemoveButton>
            </UserList>
          ))}

          {!this.state.users.length && <p>Nenhum usuário cadastrado</p>}
        </div>
      </div>
    );
  }
}
