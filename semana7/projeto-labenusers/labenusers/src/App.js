import React, { Component } from "react";
import styled from "styled-components";

import TelaRegistro from "./components/TelaRegistro/index";
import TelaUsuarios from "./components/TelaUsuarios/index";

export default class App extends Component {
  state = {
    tela: "registro",
  };

  handlePageChange = () => {
    this.setState({
      tela: this.state.tela === "registro" ? "usuarios" : "registro",
    });
  };

  render() {
    return (
      <Container>
        {this.state.tela === "registro" ? <TelaRegistro /> : <TelaUsuarios />}
        <ButtonContainer>
          <Button onClick={this.handlePageChange}>
            Ir para a página de{" "}
            {this.state.tela === "registro" ? "usuarios" : "registro"}
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background-color: #202731;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  margin: 50px;
  padding: 15px 80px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #faf566;
  color: #000;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 0;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    background: #000;
    cursor: pointer;
    color: #fff;

    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 0.7s;
    }

    &:after {
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: 0.7s;
    }
  }
`;
