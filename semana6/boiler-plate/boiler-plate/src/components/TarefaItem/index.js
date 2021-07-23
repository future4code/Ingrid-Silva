import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

class TarefaItem extends Component {
  state = {
    editando: false,
    edicaoInput: "",
  };

  comecaAEditar = () => {
    this.setState({ editando: true, edicaoInput: this.props.tarefa.texto });
  };

  terminaEdicao = () => {
    this.setState({ editando: false });
  };

  alteraEdicaoInput = (event) => {
    this.setState({ edicaoInput: event.target.value });
  };

  aoSubmeterForm = (event) => {
    event.preventDefault();
    this.props.aoEditarTarefa(this.props.tarefa.id, this.state.edicaoInput);
    this.setState({ editando: false });
  };

  render() {
    return (
      <Container completa={this.props.tarefa.completa}>
        {this.state.editando ? (
          <form onSubmit={this.aoSubmeterForm}>
            <input
              value={this.state.edicaoInput}
              onChange={this.alteraEdicaoInput}
              placeholder="Alterar tarefa"
            />
            <button>Salvar</button>
            <button type="button" onClick={this.terminaEdicao}>
              Cancelar
            </button>
          </form>
        ) : (
          <>
            <span onClick={() => this.selectTarefa(this.props.tarefa.id)}>
              {this.props.tarefa.texto}
            </span>

            <button onClick={this.comecaAEditar}>Editar</button>
            <button
              onClick={() => this.onClickDeleteTarefa(this.props.tarefa.id)}
            >
              Remover
            </button>
          </>
        )}
      </Container>
    );
  }
}

export default TarefaItem;
