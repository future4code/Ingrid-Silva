import React from "react";
import { Form, Button, Titulo, Main } from "../estilizacaoEtapas";
import PerguntaAberta from "../PerguntaAberta/PerguntaAberta";
import PerguntaFechada from "../PerguntaFechada/PerguntaFechada";

class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    escolaridade: "",
    erros: {},
  };

  aoSubmeterForm = (event) => {
    event.preventDefault();

    const erros = {};

    if (this.state.nome === "") {
      erros.nome = "Preencha seu nome";
    }

    if (this.state.idade === "") {
      erros.idade = "Preencha sua idade";
    }

    if (this.state.email === "") {
      erros.email = "Preencha seu email";
    }

    if (this.state.escolaridade === "") {
      erros.escolaridade = "Preencha sua escolaridade";
    }

    if (Object.keys(erros).length) {
      alert("Preencha todas as perguntas antes de prosseguir");
    } else {
      const proximaEtapa =
        this.state.escolaridade === "Ensino médio completo" ||
        this.state.escolaridade === "Ensino médio incompleto"
          ? 3
          : 2;

      this.props.passaEtapa(event, proximaEtapa);
    }

    this.setState({ erros });
  };

  aoMudarInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Main>
        <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
        <Form onSubmit={this.aoSubmeterForm}>
          <PerguntaAberta
            name="nome"
            value={this.state.nome}
            onChange={this.aoMudarInput}
            pergunta="1. Qual é o seu nome?"
            erro={this.state.erros?.nome}
          />
          <PerguntaAberta
            name="idade"
            value={this.state.idade}
            onChange={this.aoMudarInput}
            pergunta="2. Qual é a sua idade?"
            erro={this.state.erros?.idade}
          />
          <PerguntaAberta
            name="email"
            value={this.state.email}
            onChange={this.aoMudarInput}
            pergunta="3. Qual é o seu email?"
            erro={this.state.erros?.email}
          />
          <PerguntaFechada
            pergunta=" 4. Qual é a sua escolaridade?"
            opcoes={[
              "Ensino médio incompleto",
              "Ensino médio completo",
              "Ensino superior incompleto",
              "Ensino superior completo",
            ]}
            name="escolaridade"
            value={this.state.escolaridade}
            onChange={this.aoMudarInput}
            erro={this.state.erros?.escolaridade}
          />
          <Button>Próxima etapa</Button>
        </Form>
      </Main>
    );
  }
}

export default Etapa1;
