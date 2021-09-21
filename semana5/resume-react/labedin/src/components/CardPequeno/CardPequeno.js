import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = styled.h4`
  font-size: 20px;
  color: #0a66c2;
  margin-right: 10px;
`;

const Container = styled.div`
  border: 2px solid #0a66c2;
  margin-bottom: 10px;
  padding: 8px 40px;
  display: flex;
  border-radius: 20px;
  background-color: #dce6f1;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
  margin-top: 30px;
`;

const Icone = styled(FontAwesomeIcon)`
  color: #0a66c2;
  font-size: 30px;
  margin-right: 20px;
`;

const CardPequeno = (props) => {
  return (
    <Container>
      <Icone icon={props.icone} />
      <Title>{props.titulo}</Title>
      <p>{props.descricao}</p>
    </Container>
  );
};

export default CardPequeno;
