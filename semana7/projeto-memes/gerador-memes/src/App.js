import React, { Component } from "react";
import DogCard from "./components/DogCard";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

export default class App extends Component {
  state = {
    image: null,
  };

  getDogImage = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";

    try {
      const response = await axios.get(url);
      this.setState({ image: response.data.message });
    } catch (e) {
      alert("Não foi possível encontrar um doguinho :(");
    }
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Titulo>Doguinhos </Titulo>
          <div>
            <img src={this.state.image} />
          </div>
          <Button onClick={this.getDogImage}>Ver um doguinho</Button>
        </Container>
      </>
    );
  }
}

const Titulo = styled.h1`
  font-size: 40px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #d69a3a;
  font-family: "Gowun Dodum", sans-serif;
  color: #f5f5f5;
  min-height: 100vh;
}
`;

const Button = styled.button`
  color: #f5f5f5;
  background-color: #3e1648;
  padding: 20px 100px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: 40px 0;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #7a4487;
  }
`;
