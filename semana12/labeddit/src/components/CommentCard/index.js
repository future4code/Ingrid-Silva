import React from "react";

import {
  Container,
  Date,
  Comment,
  Up,
  Down,
  ArrowContainer,
  Button,
} from "./styles";

function CommentCard() {
  return (
    <Container>
      <Date>2021-05-28T12:59:24.633Z</Date>
      <Comment>She's a triflin' friend indeed</Comment>
      <ArrowContainer>
        <Button>
          <Up />
        </Button>
        <Button>
          <Down />
        </Button>
      </ArrowContainer>
    </Container>
  );
}

export default CommentCard;
