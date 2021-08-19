import styled from "styled-components";
import { ButtonContainer } from "../Login/styles";

import { BsTrash } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${ButtonContainer} {
    margin: 30px auto;
  }

  h1 {
    text-align: center;
    margin: 30px 0;
  }
`;

export const TripCard = styled.div`
  background-color: #1d3557;
  padding: 20px;
  margin-bottom: 15px;
  color: #f1faee;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
  cursor: pointer;
  width: 600px;
  transition: background-color 300ms ease, color 300ms ease;

  &:hover {
    background-color: #f1faee;
    color: #1d3557;
  }
`;

export const TripsContainer = styled.div``;
export const TripName = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Trash = styled(BsTrash)`
  &:hover {
    transform: scale(150%);
    stroke: #1d3557;
  }
`;
