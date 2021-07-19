import React from "react";
import { Form, Button, Titulo, Main } from "../estilizacaoEtapas";

import PerguntaAberta from "../PerguntaAberta/PerguntaAberta";

class Etapa2 extends React.Component {
  state = {
    curso: "",
    unidadeEnsino: "",

    erros: {},
  };

  aoSubmeterForm = (event) => {
    event.preventDefault();

    const erros = {};

    if (this.state.curso === "") {
      erros.curso = "Preencha o nome do seu curso";
    }

    if (this.state.unidadeEnsino === "") {
      erros.unidadeEnsino = "Preencha a unidade de ensino";
    }

    if (Object.keys(erros).length) {
      alert("Preencha todas as perguntas antes de prosseguir");
    } else {
      this.props.passaEtapa(event, 4);
    }

    this.setState({ erros });
  };

  onSubmit = (event) => {
    this.props.passaEtapa(event, 4);
  };

  aoMudarInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Main>
        <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
        <Form onSubmit={this.aoSubmeterForm}>
          <PerguntaAberta
            name="curso"
            value={this.state.curso}
            erro={this.state.erros?.curso}
            onChange={this.aoMudarInput}
            pergunta="5. Qual é curso?"
          />
          <PerguntaAberta
            name="unidadeEnsino"
            value={this.state.unidadeEnsino}
            erro={this.state.erros?.unidadeEnsino}
            onChange={this.aoMudarInput}
            pergunta="6. Qual a unidade de ensino?"
          />
          <Button>Próxima etapa</Button>
        </Form>
      </Main>
    );
  }
}

export default Etapa2;
