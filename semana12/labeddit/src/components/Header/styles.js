import styled from "styled-components";

import {
  AiFillRedditCircle,
  AiOutlineUser,
  AiOutlineDown,
  AiOutlineSearch,
} from "react-icons/ai";
import Button from "../Button";

export const Container = styled.header`
  position: fixed;
  background-color: #fff;
  padding: 5px 20px;
  height: 48px;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;

  @media (min-width: 617px) {
    justify-content: space-between;
  }
`;

export const RedditWebLogo = styled.img`
  width: 150px;

  @media (max-width: 617px) {
    display: none;
  }
`;

export const RedditIcon = styled(AiFillRedditCircle)`
  color: #ef4e17;
  height: 100%;
  font-size: 38px;

  @media (min-width: 618px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 690px;
  display: flex;
  border: 1px solid rgb(237, 239, 241);
  border-radius: 4px;
  align-items: center;
  margin: 0 16px;
  height: 100%;
  background-color: #f6f7f8;
`;

export const SearchIconContainer = styled.div`
  padding: 0 9px 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  height: 20px;
  width: 20px;
  color: #9d9fa1;
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 14px;
  margin-right: 16px;
  outline: none;
  width: 100%;
  border: none;
  background-color: #f6f7f8;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 0 0 8px;

  @media (min-width: 617px) {
  }
`;

export const User = styled(AiOutlineUser)`
  font-size: 20px;
  color: #b5b7b8;

  @media (min-width: 617px) {
    display: none;
  }
`;
export const ArrowDown = styled(AiOutlineDown)`
  font-size: 14px;

  @media (min-width: 617px) {
    display: none;
  }
`;

export const Buttonlink = styled(Button)`
  text-decoration: none;
`;
