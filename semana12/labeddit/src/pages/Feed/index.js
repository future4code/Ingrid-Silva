import React from "react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import {
  Button,
  ButtonContainer,
  Write,
  WriteCommentContainer,
  Container,
} from "../Post/styles";

import { Posts } from "./styles";

function Feed() {
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

        <Posts>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </Posts>
      </Container>
    </>
  );
}

export default Feed;
