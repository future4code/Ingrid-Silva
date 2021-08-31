import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/logo-reddit.svg";
import Button from "../Button";

import {
  Container,
  RedditIcon,
  InputContainer,
  SearchIconContainer,
  SearchIcon,
  Input,
  Menu,
  ArrowDown,
  User,
  RedditWebLogo,
} from "./styles";

function Header() {
  return (
    <Container>
      <RedditWebLogo src={Logo} />
      <RedditIcon />
      <InputContainer>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <Input type="search" placeholder="Buscar no LabEddit" />
      </InputContainer>

      <Menu>
        <Button variant="outlined" as={Link} to="/">
          Entrar
        </Button>
        <Button as={Link} to="/">
          Cadastre-se
        </Button>

        <User />
        <ArrowDown />
      </Menu>
    </Container>
  );
}

export default Header;
