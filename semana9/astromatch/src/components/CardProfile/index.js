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
    <ImageContainer
      drag="x"
      dragElastic={0}
      dragConstraints={{ left: -100, right: 100 }}
      style={props.dragStyle}
      onDragEnd={props.onDragEnd}
    >
      <Image src={props.profile.photo} alt={props.profile.name}></Image>
      <ImageBlur src={props.profile.photo} />
      <TextContainer>
        <NameAge>
          {props.profile.name}, {props.profile.age}
        </NameAge>
        <Bio>{props.profile.bio}</Bio>
      </TextContainer>
    </ImageContainer>
  );
}

export default CardProfile;
