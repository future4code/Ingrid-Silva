import styled from "styled-components";

export const ImageHeader = styled.img`
  width: 150px;
  height: 35px;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  border-radius: 20px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: color 200ms ease, background-color 200ms ease;
  border: 2px solid #fff;
  outline: none;

  svg {
    margin-left: 10px;
    font-size: 20px;
  }

  &:hover {
    background-color: #fff;
    color: #e94b6e;
  }
`;
