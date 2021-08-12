import React from "react";
import { Button, Matches } from "../Home/styles";
import {
  Container,
  Close,
  BoxBtn,
  Title,
  TextBox,
  Description,
} from "./styles";

function ItsAMatch(props) {
  console.log(props);

  return (
    <Container>
      <TextBox>
        <Title>Você teve um match!</Title>
        <Description>Você e {props.profile.name} combinaram</Description>
      </TextBox>
      <BoxBtn>
        <Button onClick={() => props.changePage("matches")}>
          Ver matches
          <Matches />
        </Button>
        <Button onClick={props.resetMatch}>
          Fechar
          <Close />
        </Button>
      </BoxBtn>
    </Container>
  );
}

export default ItsAMatch;
