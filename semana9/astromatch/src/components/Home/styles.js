import styled from "styled-components";
import { SiTinder } from "react-icons/si";
import { BsHeartFill } from "react-icons/bs";

export const IconeTinder = styled(SiTinder)``;

export const Matches = styled(BsHeartFill)``;

export const Container = styled.div`
  min-height: 600px;
  max-width: 400px;
  width: 100%;
  background-image: linear-gradient(to right, #e94b6e, #f66f4f);
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: 55px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: color 200ms ease, background-color 200ms ease;

  svg {
    margin-left: 10px;
    font-size: 20px;
  }

  &:hover {
    background-color: #fff;
    color: #e94b6e;
  }
`;

export const BoxBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  width: 100%;
`;
