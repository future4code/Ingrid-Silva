import styled from "styled-components";

import { AiFillDislike, AiFillLike } from "react-icons/ai";

export const Like = styled(AiFillLike)`
  font-size: 40px;
  color: #eb4b6d;
`;
export const Dislike = styled(AiFillDislike)`
  font-size: 40px;
  color: #eb4b6d;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 60px;

  &:hover {
    transform: scale(1.5);
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const BoxBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Container = styled.div`
  min-height: 600px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #eb4b6d;
`;
