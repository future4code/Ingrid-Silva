import styled from "styled-components";
import { Button } from "../Home/styles";
import { Title } from "../ListTrips/styles";
import { Form } from "../Login/styles";

import { BsCheck } from "react-icons/bs";

export const Check = styled(BsCheck)``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;

  ${Form} {
    padding: 30px 0;
  }

  ${Button} {
    margin: 30px auto;
  }

  ${Title} {
    width: 100%;
  }

  select {
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #1d3557;
    background-color: #fff;
  }
`;
