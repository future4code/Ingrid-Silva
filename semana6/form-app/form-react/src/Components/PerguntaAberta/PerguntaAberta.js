import React from "react";
import styled from "styled-components";

class PerguntaAberta extends React.Component {
  render() {
    return (
      <Pergunta>
        <label>{this.props.pergunta}</label>
        <Input
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </Pergunta>
    );
  }
}

const Pergunta = styled.div`
  display: flex;
  margin: 10px 0px;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
`;

export default PerguntaAberta;
