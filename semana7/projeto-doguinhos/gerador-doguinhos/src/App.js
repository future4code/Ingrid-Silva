import React, { Component } from "react";
import axios from "axios";
import DogCard from "./components/DogCard";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #d69a3a;
    font-family: "Gowun Dodum", sans-serif;
    color: #f5f5f5;
    min-height: 100vh;
    padding: 10px;

  }
  `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const Button = styled.button`
  color: #f5f5f5;
  background-color: #3e1648;
  padding: 20px 10px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: 40px 0;
  transition: background-color 300ms ease, opacity 300ms ease;
  max-width: 300px;
  width: 100%;

  &:hover {
    background-color: #7a4487;
  }

  &:disabled {
    cursor: default;
  }
`;

export default class App extends Component {
  state = {
    image: null,
    loading: false,
  };

  getDogImage = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    this.setState({ loading: true });

    try {
      const response = await axios.get(url);
      this.setState({ image: response.data.message });
    } catch (e) {
      alert("Não foi possível encontrar um doguinho :(");
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Titulo>Doguinhos </Titulo>
          <DogCard image={this.state.image} />
          <Button disabled={this.state.loading} onClick={this.getDogImage}>
            {this.state.loading ? "Carregando..." : "Ver um doguinho"}
          </Button>
        </Container>
      </>
    );
  }
}
