import styled, { css } from "styled-components";
import {
  AiOutlineComment,
  AiFillUpCircle,
  AiFillDownCircle,
} from "react-icons/ai";

export const Container = styled.section`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  transition: border-color 100ms ease;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ onClick }) =>
    !!onClick &&
    css`
      &:hover {
        border-color: #8d8d8d;
        cursor: pointer;
      }
    `}
`;

export const Username = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  color: #8d8e94;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const VoteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
`;

export const UpVoteButton = styled(VoteButton)`
  color: ${({ active }) => (active ? "#ef4e17" : "#000")};

  :hover {
    color: #ef4e17;
  }
`;

export const DownVoteButton = styled(VoteButton)`
  color: ${({ active }) => (active ? "#7193ff" : "#000")};

  :hover {
    color: #7193ff;
  }
`;

export const Up = styled(AiFillUpCircle)``;

export const Down = styled(AiFillDownCircle)``;
