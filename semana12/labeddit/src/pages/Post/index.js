import React from "react";
import CardPost from "../../components/CardPost";
import CommentCard from "../../components/CommentCard";

import {
  Container,
  CommentsContainer,
  WriteCommentContainer,
  Write,
  Button,
} from "./styles";

function Post() {
  return (
    <Container>
      <CardPost />

      <WriteCommentContainer>
        <Write />

        <Button>Comentar</Button>
      </WriteCommentContainer>

      <CommentsContainer>
        <CommentCard />
      </CommentsContainer>
    </Container>
  );
}

export default Post;
