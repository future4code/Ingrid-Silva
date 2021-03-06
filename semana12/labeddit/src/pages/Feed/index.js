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
  const { logout, isLogged } = useProtectedPage();

  const [selectedPost, setSelectedPost] = useState();
  const { filteredPosts, fetchPosts, addPost, pagination } =
    useContext(PostsContext);
  const [fields, setFields, clear] = useForm({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (isLogged) {
      fetchPosts();
    }
  }, [fetchPosts, isLogged]);

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
    return filteredPosts.map((post) => (
      <CardPost
        key={post.id}
        id={post.id}
        onClick={() => setSelectedPost(post.id)}
        title={post.title}
        username={post.username}
        body={post.body}
        comments={post.commentCount}
        createdAt={post.createdAt}
        userVote={post.userVote}
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

        <Posts
          next={() => fetchPosts(pagination.page)}
          loader={<h4>Carregando...</h4>}
          hasMore={!!pagination.hasMore}
          dataLength={filteredPosts.length}
          endMessage={null}
        >
          {renderPosts()}
        </Posts>
      </Container>
    </>
  );
}

export default Feed;
