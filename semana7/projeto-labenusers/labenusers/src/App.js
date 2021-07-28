import React, { Component } from "react";
import TelaRegistro from "./components/TelaRegistro/index";
import TelaUsuarios from "./components/TelaUsuarios/index";

export default class App extends Component {
  state = {
    tela: "registro",
  };

  handlePageChange = () => {
    this.setState({
      tela: this.state.tela === "registro" ? "usuarios" : "registro",
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePageChange}>
          Ir para a página de{" "}
          {this.state.tela === "registro" ? "usuarios" : "registro"}
        </button>
        {this.state.tela === "registro" ? <TelaRegistro /> : <TelaUsuarios />}
      </div>
    );
  }
}
