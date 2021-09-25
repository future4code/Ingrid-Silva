import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 2px solid black;
  width: 20%;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: #0a66c2;
  cursor: pointer;
  margin: 0 auto;
`;
const Seta = styled.img`
  height: 50px;
  margin-right: 20px;
`;

const Texto = styled.p`
  color: #fff;
`;

function ImagemButton(props) {
  return (
    <Container>
      <Seta src={props.imagem} />
      <Texto>{props.texto}</Texto>
    </Container>
  );
}

export default ImagemButton;
