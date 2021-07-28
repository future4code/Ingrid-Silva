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

  editUser = () => {
    const body = { name: this.state.novoNome, email: this.state.novoEmail };

    axios.put(`${url}/${this.props.id}`, body, headers).then((res) => {
      console.log(res);
      this.setState({ user: body, editarUsuario: false });
    });

    alert("Dados alterados com sucesso");
  };

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
            {this.state.editarUsuario ? (
              <form>
                <input
                  value={this.state.novoNome}
                  onChange={this.handleNewName}
                  placeholder="Digite o nome"
                />
                <input
                  value={this.state.novoEmail}
                  onChange={this.handleNewEmail}
                  placeholder="Digite o e-mail"
                />
              </form>
            ) : (
              <div>
                <p>{this.state.user.name}</p>
                <p>{this.state.user.email}</p>
              </div>
            )}

            {!this.state.editarUsuario ? (
              <>
                <button onClick={this.handleToggleEditarUsuario}>Editar</button>
                <button
                  onClick={() => this.props.deleteUser(this.state.user.id)}
                >
                  X
                </button>
              </>
            ) : (
              <>
                <button onClick={this.handleToggleEditarUsuario}>
                  Cancelar
                </button>
                <button onClick={this.editUser}>Salvar</button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}
