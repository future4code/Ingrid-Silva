import React, { useCallback, useContext, useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import CommentCard from "../../components/CommentCard";
import { getComments, createComment } from "../../services/posts";
import PostsContext from "../../store/posts-context";
import { useForm, useProtectedPage } from "../../utils/hooks";

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

  const fetchComments = useCallback(async () => {
    console.log({ id });

    if (!id) return;

    try {
      const { data } = await getComments(id);
      setComments(data);
      console.log({ data });
    } catch (e) {
      console.log({ ...e });
    }
  }, [id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const [fields, setFields, clear] = useForm({
    body: "",
  });

  const handleCreateComment = async (event) => {
    event.preventDefault();

    const body = {
      body: fields.body,
    };

    try {
      await createComment(id, body);
      fetchComments();
      clear();
    } catch (e) {
      console.log({ ...e });
    }
  };

  const renderComments = () => {
    return comments.map((comment) => (
      <CommentCard createdAt={comment.createdAt} body={comment.body} />
    ));
  };

  if (!post) return "Post não encontrado";

  return (
    <Container>
      <CardPost
        body={post.body}
        title={post.title}
        username={post.username}
        showComments={showComments}
        createdAt={post.createdAt}
      />

      <WriteCommentContainer onSubmit={handleCreateComment}>
        <Write
          type="textarea"
          name="body"
          value={fields.body}
          onChange={setFields}
          required
          placeholder="Digitar comentário..."
        />
        <ButtonContainer>
          <Button>Comentar</Button>
        </ButtonContainer>
      </WriteCommentContainer>

      <CommentsContainer>{renderComments()}</CommentsContainer>
    </Container>
  );
}

export default Post;
