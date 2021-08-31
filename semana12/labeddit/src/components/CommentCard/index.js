import React from "react";

import {
  Container,
  Date,
  Comment,
  Up,
  Down,
  ArrowContainer,
  Button,
  Username,
  Info,
} from "./styles";

function CommentCard() {
  return (
    <Container>
      <Info>
        <Username>Ingrid da Silva · </Username>
        <Date>8h</Date>
      </Info>

      <Comment>She's a triflin' friend indeed</Comment>

      <ArrowContainer>
        <Button>
          <Up />
        </Button>
        <p>12</p>
        <Button>
          <Down />
        </Button>
      </ArrowContainer>
    </Container>
  );
}

export default CommentCard;
