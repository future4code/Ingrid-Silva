import styled, { keyframes } from "styled-components";
import { BsPersonFill, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rocket from "../../img/rocket.jpg";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled(Link)`
  padding: 15px 30px;
  border-radius: 5px;
  border: 2px solid #1d3557;
  background-color: #1d3557;
  color: #f1faee;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 300ms ease, color 300ms ease;
  font-weight: 400;

  &:hover {
    background-color: #f1faee;
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
  flex-direction: column;
  padding: 15px;
  max-width: 400px;
  width: 100%;

  > h1 {
    font-size: 50px;
    color: #000;
    line-height: 1.15;
  }

  > span {
    display: block;
    font-size: 18px;
    margin-bottom: 45px;
    font-weight: 300;
  }
`;

export const ButtonContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  ${Button} + ${Button} {
    margin-top: 15px;
  }
`;

const pulseAnimation = keyframes`
  0% {
    background-size: auto 100%;
  }

  100% {
    background-size: auto 105%;
  }
`;

export const Illustration = styled.div`
  animation: ${pulseAnimation} 6s ease-in-out infinite alternate-reverse;
  background: url(${Rocket}) center no-repeat;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
  height: 100%;
  width: 50%;
`;

export const ContentContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;
