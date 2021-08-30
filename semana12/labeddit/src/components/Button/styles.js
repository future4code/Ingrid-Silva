import styled, { css } from "styled-components";

export const Container = styled.button`
  border: 1px solid transparent;
  border-radius: 20px;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  width: 120px;
  font-weight: 700;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }
  @media (max-width: 617px) {
    display: none;
  }

  ${({ variant }) => {
    switch (variant) {
      case "outlined":
        return css`
          border-color: #0079d3;
          background-color: transparent;
          color: #0079d3;

          &:hover {
            background-color: rgba(0, 121, 211, 0.04);
          }
        `;
      case "filled":
        return css`
          background-color: #0079d3;
          color: #fff;

          &:hover {
            background-color: rgba(0, 121, 211, 0.92);
          }
        `;
      default:
        return "";
    }
  }}
`;
