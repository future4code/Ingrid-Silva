import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
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
  };

  componentDidUpdate(_, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas));
    }
  }

  componentDidMount() {}

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novaListaTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: novaListaTarefas });
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

  render() {
    console.log(this.state.tarefas);

    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.onClickDeleteTarefas}>
            Remover lista de tarefas
          </button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa key={tarefa.id} completa={tarefa.completa}>
                <span onClick={() => this.selectTarefa(tarefa.id)}>
                  {tarefa.texto}
                </span>
                <button onClick={() => this.onClickDeleteTarefa(tarefa.id)}>
                  Remover lista de tarefas
                </button>
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
