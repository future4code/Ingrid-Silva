import React from "react";

import {
  Image,
  ImageBlur,
  ImageContainer,
  TextContainer,
  NameAge,
  Bio,
} from "./styles";

function CardProfile(props) {
  return (
    <div>
      <ImageContainer>
        <Image src={props.profile.photo} alt={props.profile.name}></Image>
        <ImageBlur src={props.profile.photo} />
        <TextContainer>
          <NameAge>
            {props.profile.name}, {props.profile.age}
          </NameAge>
          <Bio>{props.profile.bio}</Bio>
        </TextContainer>
      </ImageContainer>
    </div>
  );
}

export default CardProfile;
