import React, { Component } from "react";
import styled, { css } from "styled-components";

export const Container = styled.button`
  background-color: #000;
  color: #fff;
  align-items: centerC;
  display: flex;
  padding: 10px 30px 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 200ms ease;
  border: none;
  font-size: 14px;
  letter-spacing: 1px;
  align-items: center;

  &:hover {
    &:not(:disabled) {
      background-color: #16db61;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  svg {
    margin-right: 20px;
  }

  ${(props) => {
    switch (props.variant) {
      case "danger":
        return css`
          &:hover {
            color: #fff;
            background-color: #db1616;
          }
        `;
      default:
        return null;
    }
  }}
`;

export default class Button extends Component {
  render() {
    return <Container {...this.props} />;
  }
}
