import styled from "styled-components";

export const Container = styled.button`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 4px;
  text-align: center;
  background: #0079d3;
  text-transform: uppercase;
  cursor: pointer;
  min-height: 35px;
  max-width: 392px;
  min-width: 155px;
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  border: none;
  width: 100%;
  margin-top: 12px;

  &:hover {
    background-color: rgba(0, 121, 211, 0.92);
  }
`;
