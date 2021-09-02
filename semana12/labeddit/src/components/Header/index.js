import React, { useState } from "react";
import Logo from "../../assets/logo-reddit.svg";
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
} from "./styles";

function Header({ onLogout }) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

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
        <Input type="search" placeholder="Buscar no LabEddit" />
      </InputContainer>

      <Menu>
        <Button variant="outlined" onClick={onLogout}>
          Sair
        </Button>

        <div style={{ position: "relative" }}>
          <button onClick={handleShowDropdownMenu}>
            <User />
            <ArrowDown />
          </button>

          {showDropdownMenu && <DropdownMenu />}
        </div>
      </Menu>
    </Container>
  );
}

export default Header;
