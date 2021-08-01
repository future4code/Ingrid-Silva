import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Container = styled.header`
  display: flex;
  margin-bottom: 40px;
  min-width: 60%;
  background-color: black;
`;
export const Search = styled.input`
  padding: 4px;
  height: 24px;
  border: none;
  border-radius: 0 20px 20px 0;
  outline: none;
`;

export const SearchIcon = styled(BsSearch)`
  background-color: #fff;
  height: 32px;
  border-radius: 20px 0 0px 20px;
  padding: 0 10px;
  color: #000;
`;
