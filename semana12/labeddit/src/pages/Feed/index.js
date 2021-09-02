import React, { useContext, useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import PostModal from "../../components/PostModal";
import PostsContext from "../../store/posts-context";
import { useForm, useProtectedPage } from "../../utils/hooks";
import {
  Button,
  ButtonContainer,
  Write,
  WriteCommentContainer,
} from "../Post/styles";

import { Container, Posts, PostTitle } from "./styles";

function Feed() {
  const { logout } = useProtectedPage();

  const [selectedPost, setSelectedPost] = useState();
  const { posts, fetchPosts, addPost } = useContext(PostsContext);
  const [fields, setFields, clear] = useForm({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleCreatePost = async (event) => {
    event.preventDefault();

    const body = {
      title: fields.title,
      body: fields.body,
    };

    await addPost(body);
    clear();
  };

  const renderPosts = () => {
    return posts.map((post) => (
      <CardPost
        onClick={() => setSelectedPost(post.id)}
        title={post.title}
        username={post.username}
        body={post.body}
        comments={post.commentCount}
        createdAt={post.createdAt}
      />
    ));
  };

  return (
    <>
      <Header onLogout={logout} />
      <Container>
        <PostModal
          onClose={() => setSelectedPost(undefined)}
          selectedPost={selectedPost}
        />

        <WriteCommentContainer onSubmit={handleCreatePost}>
          <PostTitle
            type="text"
            name="title"
            value={fields.title}
            onChange={setFields}
            required
            placeholder="Digite o título do seu post aqui"
          ></PostTitle>
          <Write
            type="textarea"
            name="body"
            value={fields.body}
            onChange={setFields}
            required
            placeholder="Escrever post..."
          />
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
