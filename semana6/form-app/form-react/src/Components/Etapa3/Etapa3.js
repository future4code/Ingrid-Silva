import React from "react";
import { Form, Button, Titulo, Main } from "../estilizacaoEtapas";

import PerguntaAberta from "../PerguntaAberta/PerguntaAberta";
import PerguntaFechada from "../PerguntaFechada/PerguntaFechada";

class Etapa3 extends React.Component {
  state = {
    terminouCurso: "",
    cursoComplementar: "",

    erros: {},
  };

  aoSubmeterForm = (event) => {
    event.preventDefault();

    const erros = {};

    if (this.state.terminouCurso === "") {
      erros.terminouCurso = "Conte porque não terminou o curso de graduação";
    }

    if (this.state.cursoComplementar === "") {
      erros.cursoComplementar = "Preencha o campo curso complementar";
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

  onSubmit = (event) => {
    this.props.passaEtapa(event, 4);
  };

  render() {
    return (
      <Main>
        <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
        <Form onSubmit={this.aoSubmeterForm}>
          <PerguntaAberta
            name="terminouCurso"
            value={this.state.terminouCurso}
            erro={this.state.erros?.terminouCurso}
            onChange={this.aoMudarInput}
            pergunta="5. Por que você não terminou um curso de graduação?"
          />

          <PerguntaFechada
            name="cursoComplementar"
            value={this.state.cursoComplementar}
            erro={this.state.erros?.cursoComplementar}
            onChange={this.aoMudarInput}
            pergunta=" 6. Você fez algum curso complementar?"
            opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
          />
          <Button>Próxima etapa</Button>
        </Form>
      </Main>
    );
  }
}

export default Etapa3;
