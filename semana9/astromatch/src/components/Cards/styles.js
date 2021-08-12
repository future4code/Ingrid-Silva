import styled from "styled-components";

import { AiFillDislike, AiFillLike } from "react-icons/ai";

export const Like = styled(AiFillLike)``;
export const Dislike = styled(AiFillDislike)``;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 40px;
  color: #fff;
  margin-right: 60px;
  transition: transform 200ms ease;

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
  background-image: linear-gradient(to right, #e94b6e, #f66f4f);
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
  position: relative;
  overflow: hidden;
`;
