import React from "react";
import styled from "styled-components";

class PerguntaFechada extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.pergunta}</label>
        <Input
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          <option>Selecione uma opção</option>
          {this.props.opcoes.map((opcao, index) => (
            <option value={opcao} key={index}>
              {opcao}
            </option>
          ))}
        </Input>
      </div>
    );
  }
}

const Input = styled.select`
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
`;

export default PerguntaFechada;
