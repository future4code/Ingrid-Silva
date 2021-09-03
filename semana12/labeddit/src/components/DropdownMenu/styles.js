import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";

export const Container = styled.div`
  background-color: #fff;
  position: absolute;
  top: 100%;
  top: calc(100% + 5px);
  right: 0;
  width: 100px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #8d8d8d;
  border-radius: 4px;
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Logout = styled(AiOutlineLogout)`
  margin-left: 10px;
`;
