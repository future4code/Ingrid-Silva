import React from "react";
import CardPost from "../../components/CardPost";
import CommentCard from "../../components/CommentCard";

import {
  Container,
  CommentsContainer,
  WriteCommentContainer,
  Line,
  Write,
  Button,
  ButtonContainer,
} from "./styles";

function Post() {
  return (
    <Container>
      <CardPost />

      <WriteCommentContainer>
        <Write type="textarea" placeholder="Criar post" />
        <ButtonContainer>
          <Button>Comentar</Button>
        </ButtonContainer>
      </WriteCommentContainer>

      <Line />

      <CommentsContainer>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </CommentsContainer>
    </Container>
  );
}

export default Post;
