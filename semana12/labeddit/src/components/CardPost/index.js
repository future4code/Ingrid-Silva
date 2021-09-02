import React from "react";
import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
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

dayjs.extend(relativeTimePlugin);
dayjs.locale("pt-br");

function CardPost({
  title,
  username,
  body,
  comments,
  onClick,
  createdAt,
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
        <Username>
          Postado por {username} {dayjs(createdAt).fromNow()}
        </Username>
        <Title>{title}</Title>
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
