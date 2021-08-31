import styled from "styled-components";
import {
  AiOutlineComment,
  AiFillUpCircle,
  AiFillDownCircle,
} from "react-icons/ai";

export const Container = styled.main`
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 30px;
  margin-bottom: 15px;
  display: flex;
`;
export const Title = styled.h3`
  margin-bottom: 15px;
`;
export const PostContent = styled.p``;

export const CommentsContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 5px;
  align-items: center;
`;
export const CommentIcon = styled(AiOutlineComment)`
  font-size: 20px;
  color: #8d8d8d;
`;
export const Comments = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #8d8d8d;
`;

export const MainContent = styled.div``;
export const IconsContainer = styled.div`
  margin-right: 15px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
export const Up = styled(AiFillUpCircle)`
  font-size: 25px;

  &:hover {
    color: #ef4e17;
  }
`;
export const Down = styled(AiFillDownCircle)`
  font-size: 25px;

  &:hover {
    color: #7193ff;
  }
`;

export const Username = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;
