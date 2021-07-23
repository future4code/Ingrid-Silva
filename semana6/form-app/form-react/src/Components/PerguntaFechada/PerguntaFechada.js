import React from "react";
import styled from "styled-components";

class PerguntaFechada extends React.Component {
  render() {
    return (
      <Pergunta>
        <label>{this.props.pergunta}</label>
        <Input
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          <option value="">Selecione uma opção</option>
          {this.props.opcoes.map((opcao, index) => (
            <option value={opcao} key={index}>
              {opcao}
            </option>
          ))}
        </Input>
        <Erro>{this.props.erro}</Erro>
      </Pergunta>
    );
  }
}

const Pergunta = styled.div`
  display: flex;
  margin: 10px 0px;
  align-items: center;
  flex-direction: column;
`;
const Erro = styled.p`
  font-size: 10px;
  color: #ff1212;
  font-weight: 700;
`;

const Input = styled.select`
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 10px;
`;

export default PerguntaFechada;
