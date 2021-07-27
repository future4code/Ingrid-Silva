import axios from "axios";
import React, { Component } from "react";

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

  deleteUser = (id) => {
    axios
      .delete(`${url}/${id}`, headers)
      .then(() => {
        this.fetchUsers();
        alert("Usuário deletado com sucesso");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            <button onClick={() => this.deleteUser(user.id)}>X</button>
          </div>
        ))}

        {!this.state.users.length && <p>Nenhum usuário cadastrado</p>}
      </div>
    );
  }
}
