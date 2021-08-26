import styled from "styled-components";
import { Button } from "../Home/styles";

export const Title = styled.h1`
  margin-top: 30px;

  > small {
    display: block;
    font-size: 18px;
  }
`;

export const TripsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const Trip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 40px 20px;
  background-color: #1d3557;
  color: #f1faee;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  span {
    font-weight: 700;
    margin-right: 5px;
  }

  ${Button} {
    background-color: #f1faee;
    color: #1d3557;
    margin: 0 auto;

    &:hover {
      background-color: #f0f8ff;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  padding: 30px;
`;

export const TripName = styled.h3`
  text-align: center;
`;

export const Content = styled.div`
  margin: 30px;
`;
export const Duration = styled.p`
  font-weight: 300;
`;
export const Destination = styled.p`
  margin-bottom: 10px;
  font-weight: 300;
`;
export const Description = styled.p`
  margin-bottom: 10px;

  font-weight: 300;
`;
export const Date = styled.p`
  margin-bottom: 10px;

  font-weight: 300;
`;
