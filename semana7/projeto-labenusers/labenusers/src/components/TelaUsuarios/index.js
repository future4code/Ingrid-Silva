import axios from "axios";
import React, { Component } from "react";
import DetalheUsuario from "../DetalheUsuario";

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
        {this.state.users.map((user) => (
          <div key={user.id}>
            <p onClick={() => this.handleSelectUser(user.id)}>{user.name}</p>
            <button onClick={() => this.deleteUser(user.id)}>X</button>
          </div>
        ))}

        {!this.state.users.length && <p>Nenhum usuário cadastrado</p>}
      </div>
    );
  }
}
