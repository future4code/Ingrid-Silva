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
  };

  aoSubmeterForm = (event) => {
    event.preventDefault();

    if (
      this.state.nome === "" ||
      this.state.idade === "" ||
      this.state.email === "" ||
      this.state.escolaridade === ""
    ) {
      alert("Preencha todas as perguntas antes de prosseguir");
    } else {
      const proximaEtapa =
        this.state.escolaridade === "Ensino médio completo" ||
        this.state.escolaridade === "Ensino médio incompleto"
          ? 3
          : 2;

      this.props.passaEtapa(event, proximaEtapa);
    }
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
          />
          <PerguntaAberta
            name="idade"
            value={this.state.idade}
            onChange={this.aoMudarInput}
            pergunta="2. Qual é a sua idade?"
          />
          <PerguntaAberta
            name="email"
            value={this.state.email}
            onChange={this.aoMudarInput}
            pergunta="3. Qual é o seu email?"
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
          />
          <Button>Próxima etapa</Button>
        </Form>
      </Main>
    );
  }
}

export default Etapa1;
