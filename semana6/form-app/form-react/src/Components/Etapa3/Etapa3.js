import React from "react";
import { Form, Button, Titulo, Main } from "../estilizacaoEtapas";

import PerguntaAberta from "../PerguntaAberta/PerguntaAberta";
import PerguntaFechada from "../PerguntaFechada/PerguntaFechada";

class Etapa3 extends React.Component {
  onSubmit = (event) => {
    this.props.passaEtapa(event, 4);
  };

  render() {
    return (
      <Main>
        <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
        <Form onSubmit={this.onSubmit}>
          <PerguntaAberta pergunta="5. Por que você não terminou um curso de graduação?" />
          <PerguntaAberta pergunta="6. Você fez algum curso complementar?" />
          <PerguntaFechada
            pergunta=" 4. Qual é a sua escolaridade?"
            opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
          />
          <Button>Próxima etapa</Button>
        </Form>
      </Main>
    );
  }
}

export default Etapa3;
