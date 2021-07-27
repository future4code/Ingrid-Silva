import axios from "axios";
import React, { Component } from "react";

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

  render() {
    return (
      <div>
        <button onClick={this.props.clearSelectedUser}>
          Voltar para a listagem
        </button>

        {!this.state.user ? (
          <p>Carregando usuário...</p>
        ) : (
          <div>
            <ul>
              <li>{this.state.user.name}</li>
              <li>{this.state.user.email}</li>
              <li>
                <button
                  onClick={() => this.props.deleteUser(this.state.user.id)}
                >
                  X
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
