import React from "react";

import { Container, Button, Logout } from "./styles";

function DropdownMenu() {
  return (
    <Container>
      <Button>
        Sair
        <Logout />
      </Button>
    </Container>
  );
}

export default DropdownMenu;
