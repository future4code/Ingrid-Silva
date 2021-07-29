import React, { Component } from "react";
import { Imagem, BoxInicial, Mensagem } from "./styles";

export default class DogCard extends Component {
  render() {
    return (
      <BoxInicial>
        {this.props.image ? (
          <Imagem src={this.props.image} />
        ) : (
          <Mensagem>Comece a ver doguinhos clicando no botão abaixo!</Mensagem>
        )}
      </BoxInicial>
    );
  }
}
