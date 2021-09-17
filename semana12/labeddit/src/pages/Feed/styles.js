import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container as PostContainer } from "../Post/styles";

export const Container = styled(PostContainer)`
  margin-bottom: 30px;
  margin-top: 78px;
`;

export const Posts = styled(InfiniteScroll)`
  margin-top: 15px;
`;

export const PostTitle = styled.input`
  border: 1px solid #dae0e6;
  border-radius: 4px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  padding: 8px 16px;
  margin-bottom: 10px;
`;
