import React, { useContext, useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import PostModal from "../../components/PostModal";
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

  const [selectedPost, setSelectedPost] = useState();
  const { posts, fetchPosts } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderPosts = () => {
    return posts.map((post) => (
      <CardPost
        onClick={() => setSelectedPost(post.id)}
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
        <PostModal
          onClose={() => setSelectedPost(undefined)}
          selectedPost={selectedPost}
        />

        <WriteCommentContainer>
          <Write type="textarea" placeholder="Postar" />
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
