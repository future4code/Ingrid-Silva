import React from "react";
import { useProtectedPage } from "../../utils/hooks";

import { Container, Button, Logout } from "./styles";

function DropdownMenu() {
  const { logout } = useProtectedPage();

  return (
    <Container>
      <Button>
        Sair
        <Logout onClick={logout} />
      </Button>
    </Container>
  );
}

export default DropdownMenu;
