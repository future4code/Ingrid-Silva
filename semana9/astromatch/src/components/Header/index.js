import React from "react";
import { IconeTinder } from "../Home/styles";
import Logo from "../../assets/images/tinder-1.svg";
import { ImageHeader, Container, Button } from "./styles";

function Header(props) {
  return (
    <Container>
      <Button onClick={() => props.changePage("home")}>
        Home
        <IconeTinder />
      </Button>
      <ImageHeader src={Logo} />
    </Container>
  );
}

export default Header;
