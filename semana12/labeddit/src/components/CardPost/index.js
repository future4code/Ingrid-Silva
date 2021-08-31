import React from "react";

import {
  Container,
  Title,
  PostContent,
  CommentsContainer,
  CommentIcon,
  Comments,
  MainContent,
  IconsContainer,
  Up,
  Down,
  Username,
} from "./styles";

function CardPost({ title, username, body, comments }) {
  return (
    <Container>
      <IconsContainer>
        <button>
          <Up />
        </button>
        <button>
          <Down />
        </button>
      </IconsContainer>
      <MainContent>
        <Title>{title}</Title>
        <Username>{username}</Username>
        {/* <Date></Date> */}
        <PostContent>{body}</PostContent>
        <CommentsContainer>
          <CommentIcon />
          <Comments>{comments} comentários</Comments>
        </CommentsContainer>
      </MainContent>
    </Container>
  );
}

export default CardPost;
