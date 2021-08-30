import React from "react";

import { Container } from "./styles";

function LoginButton({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default LoginButton;
