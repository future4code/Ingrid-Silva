import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Usuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 200px;
`;

const ImagemPerfil = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin-right: 50px;
  margin-top: 50px;
`;

const Nome = styled.h4`
  font-size: 25px;
`;

const ContainerDescricao = styled.div`
  border: 3px solid #0a66c2;
  margin: 50px 0;
  padding: 10px 10px;
  border-radius: 40px;
  background-color: #dce6f1;
`;
const Descricao = styled.p`
  text-align: center;
`;
function CardGrande(props) {
  return (
    <Container>
      <Usuario>
        <ImagemPerfil src={props.imagem} />
        <Nome>{props.nome}</Nome>
      </Usuario>
      <ContainerDescricao>
        <Descricao>{props.descricao}</Descricao>
      </ContainerDescricao>
    </Container>
  );
}

export default CardGrande;
