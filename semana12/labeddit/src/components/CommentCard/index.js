import React from "react";
import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { Username } from "../CardPost/styles";
import { Container, Comment, Up, Down, ArrowContainer, Button } from "./styles";

dayjs.extend(relativeTimePlugin);
dayjs.locale("pt-br");

function CommentCard({ body, createdAt }) {
  return (
    <Container>
      <Username>Postado {dayjs(createdAt).fromNow()}</Username>
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
