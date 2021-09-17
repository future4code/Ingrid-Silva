import React from "react";
import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { Username } from "../CardPost/styles";
import {
  Container,
  Comment,
  Up,
  Down,
  ArrowContainer,
  DownVoteButton,
  UpVoteButton,
} from "./styles";
import {
  createCommentVote,
  updateCommentVote,
  deleteCommentVote,
} from "../../services/votes";

dayjs.extend(relativeTimePlugin);
dayjs.locale("pt-br");

function CommentCard({ body, createdAt, userVote, changeCommentVote, id }) {
  const getVoteIntentionAction = (direction) => {
    if (userVote !== null) {
      if (userVote === direction) {
        return [deleteCommentVote, null];
      }

      return [updateCommentVote, direction];
    }

    return [createCommentVote, direction];
  };
  const handleCommentVote = (direction) => {
    const body = {
      direction,
    };

    const [action, content] = getVoteIntentionAction(direction);

    try {
      action(id, body);
      changeCommentVote(id, content);
    } catch (e) {
      console.log({ ...e });
    }
  };

  const handleDownVote = (e) => {
    e.stopPropagation();
    handleCommentVote(-1);
  };

  const handleUpVote = (e) => {
    e.stopPropagation();
    handleCommentVote(1);
  };
  return (
    <Container>
      <Username>Postado {dayjs(createdAt).fromNow()}</Username>
      <Comment>{body}</Comment>

      <ArrowContainer>
        <UpVoteButton active={userVote === 1} onClick={handleUpVote}>
          <Up />
        </UpVoteButton>
        <DownVoteButton active={userVote === -1} onClick={handleDownVote}>
          <Down />
        </DownVoteButton>
      </ArrowContainer>
    </Container>
  );
}

export default CommentCard;
