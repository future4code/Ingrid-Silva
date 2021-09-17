import React, { useContext } from "react";
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
  UpVoteButton,
  DownVoteButton,
} from "./styles";
import {
  createPostVote,
  updatePostVote,
  deletePostVote,
} from "../../services/votes";
import PostsContext from "../../store/posts-context";

dayjs.extend(relativeTimePlugin);
dayjs.locale("pt-br");

function CardPost({
  id,
  title,
  username,
  body,
  comments,
  onClick,
  createdAt,
  showComments = true,
  userVote,
}) {
  const { changePostVote } = useContext(PostsContext);

  const getVoteIntentionAction = (direction) => {
    if (userVote !== null) {
      if (userVote === direction) {
        return [deletePostVote, null];
      }

      return [updatePostVote, direction];
    }

    return [createPostVote, direction];
  };

  const handlePostVote = (direction) => {
    const body = {
      direction,
    };

    const [action, content] = getVoteIntentionAction(direction);

    try {
      action(id, body);
      changePostVote(id, content);
    } catch (e) {
      console.log({ ...e });
    }
  };

  const handleDownVote = (e) => {
    e.stopPropagation();
    handlePostVote(-1);
  };

  const handleUpVote = (e) => {
    e.stopPropagation();
    handlePostVote(1);
  };

  return (
    <Container onClick={onClick}>
      <IconsContainer>
        <UpVoteButton active={userVote === 1} onClick={handleUpVote}>
          <Up />
        </UpVoteButton>
        <DownVoteButton active={userVote === -1} onClick={handleDownVote}>
          <Down />
        </DownVoteButton>
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
