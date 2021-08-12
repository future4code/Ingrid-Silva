import styled from "styled-components";

import { BsX } from "react-icons/bs";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Close = styled(BsX)``;

export const BoxBtn = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;

export const TextBox = styled.div``;
export const Title = styled.h2`
  margin-bottom: 30px;
`;
export const Description = styled.p`
  text-align: center;
`;
