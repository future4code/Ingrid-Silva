import React from "react";

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
} from "./styles";
function CardPost() {
  return (
    <Container>
      <IconsContainer>
        <button>
          <Up />
        </button>
        <button>
          <Down />
        </button>
      </IconsContainer>
      <MainContent>
        <Title>
          John, a wealthy 60 year old man, shows up at the country club one day
          with his new wife, a smoking hot 22 year old blonde.
        </Title>
        <PostContent>
          His buddies are amazed. "There is no way someone that young and
          attractive would agree to marry an old geezer like you. How did you
          pull it off?" "It's simple," John says, "I lied to her about my age."
          "Did you tell her you were 50?" his friends ask. John shakes his head
          no. "There is no way she could believe you were 40". John shakes his
          head again. "So how old did you tell her you were exactly??" John
          smiles and says "85".
        </PostContent>
        <CommentsContainer>
          <CommentIcon />
          <Comments>19 comentários</Comments>
        </CommentsContainer>
      </MainContent>
    </Container>
  );
}

export default CardPost;
