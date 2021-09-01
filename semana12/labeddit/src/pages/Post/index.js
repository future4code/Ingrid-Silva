import React, { useContext, useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import CommentCard from "../../components/CommentCard";
import { getComments } from "../../services/posts";
import PostsContext from "../../store/posts-context";
import { useProtectedPage } from "../../utils/hooks";

import {
  Container,
  CommentsContainer,
  WriteCommentContainer,
  Write,
  Button,
  ButtonContainer,
} from "./styles";

function Post({ id, showComments }) {
  const [comments, setComments] = useState([]);
  useProtectedPage();

  const { posts } = useContext(PostsContext);

  const post = posts.find((post) => post.id === id);

  useEffect(() => {
    const fetchComments = async () => {
      if (!id) return;

      try {
        const { data } = await getComments(id);
        setComments(data);
        console.log({ data });
      } catch (e) {
        console.log(e);
      }
    };

    fetchComments();
  }, [id]);

  if (!post) return "Post não encontrado";

  console.log({ comments });

  const renderComments = () => {
    return comments.map((comment) => <CommentCard body={comment.body} />);
  };
  return (
    <Container>
      <CardPost
        body={post.body}
        title={post.title}
        username={post.username}
        showComments={showComments}
      />

      <WriteCommentContainer>
        <Write type="textarea" placeholder="Digitar comentário..." />
        <ButtonContainer>
          <Button>Comentar</Button>
        </ButtonContainer>
      </WriteCommentContainer>

      <CommentsContainer>{renderComments()}</CommentsContainer>
    </Container>
  );
}

export default Post;
