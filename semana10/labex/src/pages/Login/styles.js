import styled from "styled-components";

import { Button } from "../Home/styles";

export const Form = styled.form`
  width: 100%;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  font-size: 12px;
`;
export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #1d3557;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const BackButton = styled(Button)`
  svg {
    margin-right: 10px;
    margin-left: 0px;
  }
`;

export const FormTitle = styled.h3`
  margin-bottom: 20px;
`;
