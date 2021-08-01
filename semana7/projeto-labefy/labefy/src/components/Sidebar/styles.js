import styled from "styled-components";
import { BsFillPlusCircleFill, BsMusicNoteList } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  max-width: 300px;
  padding: 20px;
  width: 100%;
`;

export const PlusIcon = styled(BsFillPlusCircleFill)``;

export const List = styled(BsMusicNoteList)``;

export const Logo = styled.img`
  height: 35px;
  width: 117px;
  margin-bottom: 20px;
`;
