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

function CardPost({
  title,
  username,
  body,
  comments,
  onClick,
  showComments = true,
}) {
  return (
    <Container onClick={onClick}>
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
        <PostContent>{body}</PostContent>
        {showComments && (
          <CommentsContainer>
            <CommentIcon />
            <Comments>{comments || 0} comentários</Comments>
          </CommentsContainer>
        )}
      </MainContent>
    </Container>
  );
}

export default CardPost;
