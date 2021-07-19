import React from "react";
import { Form, Button, Titulo, Main } from "../estilizacaoEtapas";

import PerguntaAberta from "../PerguntaAberta/PerguntaAberta";

class Etapa2 extends React.Component {
  onSubmit = (event) => {
    this.props.passaEtapa(event, 4);
  };

  render() {
    return (
      <Main>
        <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
        <Form onSubmit={this.onSubmit}>
          <PerguntaAberta pergunta="5. Qual é curso?" />
          <PerguntaAberta pergunta="6. Qual a unidade de ensino?" />
          <Button>Próxima etapa</Button>
        </Form>
      </Main>
    );
  }
}

export default Etapa2;
