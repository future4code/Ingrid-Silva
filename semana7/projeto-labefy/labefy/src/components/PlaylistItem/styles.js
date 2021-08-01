import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
`;

export const Container = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

export const BoxBtn = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const TituloPlaylist = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: 700;
`;

export const Input = styled.input`
  border-radius: 20px;
  outline: none;
  border: none;
  padding: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  margin: 0 0 10px 0;
  font-size: 12px;
`;
