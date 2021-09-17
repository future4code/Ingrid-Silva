import React, { useContext, useState } from "react";
import Logo from "../../assets/logo-reddit.svg";
import PostsContext from "../../store/posts-context";
import Button from "../Button";
import DropdownMenu from "../DropdownMenu";

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
  DropdownContainer,
  DropdownButton,
} from "./styles";

function Header({ onLogout }) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const { filter, setFilter } = useContext(PostsContext);

  const handleInputSearch = (e) => {
    setFilter(e.target.value);
  };

  const handleShowDropdownMenu = () => {
    setShowDropdownMenu((prev) => !prev);
  };

  return (
    <Container>
      <RedditWebLogo src={Logo} />
      <RedditIcon />
      <InputContainer>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <Input
          value={filter}
          type="search"
          onChange={handleInputSearch}
          placeholder="Buscar no LabEddit"
        />
      </InputContainer>

      <Menu>
        <Button variant="outlined" onClick={onLogout}>
          Sair
        </Button>

        <DropdownContainer style={{ position: "relative" }}>
          <DropdownButton onClick={handleShowDropdownMenu}>
            <User />
            <ArrowDown />
          </DropdownButton>

          {showDropdownMenu && <DropdownMenu />}
        </DropdownContainer>
      </Menu>
    </Container>
  );
}

export default Header;
