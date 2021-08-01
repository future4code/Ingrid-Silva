import styled from "styled-components";
import { BsPlayFill, BsStopFill } from "react-icons/bs";

export const Play = styled(BsPlayFill)`
  font-size: 20px;
`;

export const Stop = styled(BsStopFill)`
  font-size: 20px;
`;
export const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;

  audio {
    margin-left: 20px;
  }
`;

export const SongName = styled.p`
  margin: 0;
`;
