import axios from "axios";
import React, { Component } from "react";

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
      <form onSubmit={this.addUser}>
        <label>Nome:</label>
        <input value={this.state.inputName} onChange={this.handleInputName} />
        <label>E-mail:</label>
        <input value={this.state.inputEmail} onChange={this.handleInputEmail} />
        <button>Salvar</button>
      </form>
    );
  }
}
