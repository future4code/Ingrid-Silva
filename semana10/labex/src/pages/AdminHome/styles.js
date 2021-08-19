import styled from "styled-components";
import { ButtonContainer } from "../Login/styles";

import { BsTrash, BsPlus } from "react-icons/bs";
import { Button } from "../Home/styles";

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
  transition: background-color 300ms ease, color 300ms ease;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  ${Button} {
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #f1faee;
    transition: color 300ms ease;
    margin-right: 60px;
    display: flex;
    align-items: center;

    svg {
      font-size: 20px;
    }
  }

  &:hover {
    background-color: #f1faee;
    color: #1d3557;

    ${Button} {
      color: #1d3557;
    }
  }
`;

export const TripsContainer = styled.div`
  max-width: 600px;
  width: 100%; ;
`;
export const TripName = styled.p``;
export const Trash = styled(BsTrash)`
  cursor: pointer;
  &:hover {
    transform: scale(150%);
    stroke: #1d3557;
  }
`;

export const Plus = styled(BsPlus)``;
