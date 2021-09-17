import React from "react";
import { Container } from "./styles";

function Button({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Button.defaultProps = {
  variant: "filled",
};

export default Button;
