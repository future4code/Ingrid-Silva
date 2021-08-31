import React, { useContext, useEffect } from "react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import PostsContext from "../../store/posts-context";
import { useProtectedPage } from "../../utils/hooks";
import {
  Button,
  ButtonContainer,
  Write,
  WriteCommentContainer,
  Container,
} from "../Post/styles";

import { Posts } from "./styles";

function Feed() {
  useProtectedPage();

  const { posts, fetchPosts } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderPosts = () => {
    return posts.map((post) => (
      <CardPost
        title={post.title}
        username={post.username}
        body={post.body}
        comments={post.commentCount}
      />
    ));
  };

  return (
    <>
      <Header />
      <Container>
        <WriteCommentContainer>
          <Write type="textarea" placeholder="No que está pensando?" />
          <ButtonContainer>
            <Button>Postar</Button>
          </ButtonContainer>
        </WriteCommentContainer>

        <Posts>{renderPosts()}</Posts>
      </Container>
    </>
  );
}

export default Feed;
