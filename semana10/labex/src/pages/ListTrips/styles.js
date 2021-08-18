import styled from "styled-components";

export const Title = styled.h2``;

export const TripsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Trip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 600px;
  height: 250px;
  border: 2px solid #1d3557;
  border-radius: 5px;
  padding: 20px;
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
