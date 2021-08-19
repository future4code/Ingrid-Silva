import styled from "styled-components";
import { Button } from "../Home/styles";
import { BackButton } from "../Login/styles";

export const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    margin-right: 5px;
  }
`;

export const TripName = styled.h1`
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 100%;

  ${BackButton} {
    margin: 30px auto;
    width: max-content;
  }
`;

export const CandidateContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 60px;
  padding: 30px;
  justify-content: center;
  align-items: center;

  ${Button} {
    background-color: #f1faee;
    color: #1d3557;
    margin: 0 auto;

    &:hover {
      background-color: #f0f8ff;
    }
  }
`;

export const Candidate = styled.div`
  width: 400px;
  background-color: #1d3557;
  color: #f1faee;
  border-radius: 5px;
  padding: 30px;

  p {
    margin-bottom: 10px;
  }
  span {
    font-weight: 700;
    margin-right: 5px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

export const Approved = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    font-size: 18px;
  }
`;
