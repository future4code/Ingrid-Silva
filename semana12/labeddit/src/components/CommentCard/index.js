import React from "react";

import { Container, Comment, Up, Down, ArrowContainer, Button } from "./styles";

function CommentCard({ body }) {
  return (
    <Container>
      <Comment>{body}</Comment>

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
