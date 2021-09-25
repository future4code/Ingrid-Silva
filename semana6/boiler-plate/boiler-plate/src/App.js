import React from "react";
import styled from "styled-components";
import TarefaItem from "./components/TarefaItem";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: "1626795791088",
        texto: "Fazer almoço",
        completa: false,
      },
      {
        id: "1626795791089",
        texto: "Dormir",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
    inputBusca: "",
    ordenacao: "ASC",
  };

  componentDidUpdate(_, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas));
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = (event) => {
    event.preventDefault();

    if (!this.state.inputValue.length) return;

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novaListaTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: novaListaTarefas, inputValue: "" });
  };

  aoEditarTarefa = (id, novoTexto) => {
    const tarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          texto: novoTexto,
        };
      }

      return tarefa;
    });

    this.setState({ tarefas: tarefas });
  };

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novasTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  onClickDeleteTarefas = () => {
    this.setState({ tarefas: [] });
  };

  onClickDeleteTarefa = (id) => {
    const tarefas = this.state.tarefas.filter((tarefa) => tarefa.id !== id);

    this.setState({ tarefas: tarefas });
  };

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
  };

  filtroPorStatus = (tarefa) => {
    switch (this.state.filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  };

  filtroPorNome = (tarefa) => {
    return tarefa.texto
      .toLowerCase()
      .includes(this.state.inputBusca.toLowerCase());
  };

  alteraOrdenacao = (ordenacao) => {
    this.setState({ ordenacao: ordenacao });
  };

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(this.filtroPorStatus)
      .filter(this.filtroPorNome);

    listaFiltrada.sort((a, b) => {
      if (this.state.ordenacao === "ASC") {
        if (a.texto < b.texto) return -1;

        if (a.texto > b.texto) return 1;

        return 0;
      } else if (this.state.ordenacao === "DESC") {
        if (a.texto < b.texto) return 1;

        if (a.texto > b.texto) return -1;

        return 0;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>

        <InputsContainer>
          <form onSubmit={this.criaTarefa}>
            <input
              required
              value={this.state.inputValue}
              onChange={this.onChangeInput}
            />
            <button>Adicionar</button>
            <button type="button" onClick={this.onClickDeleteTarefas}>
              Remover lista de tarefas
            </button>
            <br />

            <input
              type="search"
              value={this.state.inputBusca}
              onChange={this.onChangeBusca}
              placeholder="Procurar tarefa"
            />
          </form>
        </InputsContainer>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <InputsContainer>
          <label>Ordenação</label>
          <button onClick={() => this.alteraOrdenacao("ASC")}>
            Ascendente
          </button>
          <button onClick={() => this.alteraOrdenacao("DESC")}>
            Descendente
          </button>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <TarefaItem
                key={tarefa.id}
                tarefa={tarefa}
                aoEditarTarefa={this.aoEditarTarefa}
              />
            );
          })}

          {listaFiltrada.length === 0 && <p>Nenhum item</p>}
        </TarefaList>
      </div>
    );
  }
}

export default App;
