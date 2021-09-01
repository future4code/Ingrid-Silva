import styled from "styled-components";
import { AiFillUpCircle, AiFillDownCircle } from "react-icons/ai";

export const Container = styled.div`
  background-color: #fff;
  padding: 10px 20px;
`;

export const Username = styled.p`
  font-size: 12px;
`;
export const Date = styled.p`
  font-size: 12px;
  color: #7c7c7c;
  margin-left: 5px;
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 6px;
`;
export const Comment = styled.p`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-weight: 700;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const Up = styled(AiFillUpCircle)`
  font-size: 25px;

  &:hover {
    color: #ef4e17;
  }
`;
export const Down = styled(AiFillDownCircle)`
  font-size: 25px;

  &:hover {
    color: #7193ff;
  }
`;
