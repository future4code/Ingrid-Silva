import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoComentario extends Component {
  state = {
    valorInputComentario: "",
  };

  onChangeComentario = (event) => {
    this.setState({ valorInputComentario: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.aoEnviar(this.state.valorInputComentario);
  };

  render() {
    return (
      <CommentContainer onSubmit={this.onSubmit}>
        <InputComentario
          placeholder="Comentário"
          value={this.state.valorInputComentario}
          onChange={this.onChangeComentario}
          autoFocus
        />
        <button>Enviar</button>
      </CommentContainer>
    );
  }
}
