import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 15px 50px;
  border-radius: 10px 0px 0px 10px;
  outline: none;
  border: none;
  margin: 40px 0px 40px 20px;
`;

export const Button = styled.button`
  padding: 15px 20px;
  border-radius: 0px 10px 10px 0px;
  border: none;
  background-color: #faf566;
  cursor: pointer;

  &:hover {
    background-color: #e5e055;
  }
`;

export const UserList = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #faf566;
  cursor: pointer;
  color: #000;
  font-size: 12px;

  &:hover {
    background-color: #e5e055;
  }
`;

export const Nome = styled.p`
  font-size: 20px;
  cursor: pointer;
`;
