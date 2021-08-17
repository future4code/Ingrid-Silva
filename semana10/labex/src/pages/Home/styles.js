import styled from "styled-components";
import { BsPersonFill, BsChevronRight } from "react-icons/bs";
import Rocket from "../../img/rocket.jpg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 20px 40px;
  border-radius: 5px;
  background-color: #1d3557;
  color: #f1faee;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 300ms ease;
  font-weight: 700;

  &:hover { 
    background-color: #a8dadc;
    color: #1d3557;
  }

  svg {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const AdminIcon = styled(BsPersonFill)``;
export const TripIcon = styled(BsChevronRight)``;

export const RocketContainer = styled.div`
  align-items: center;
  /* background: url(${Rocket}) center no-repeat; */
  background-size: cover;
  display: flex;
  height: 300px;
  padding: 15px;
  justify-content: center;
  margin-bottom: 30px;

  > h1 {
    font-family: "Paytone One", sans-serif;
    font-size: 40px;
    color: #e63946;
    text-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  gap: 30px;
`;
