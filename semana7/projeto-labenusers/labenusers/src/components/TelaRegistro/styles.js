import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faf566;
  align-items: center;
  justify-content: center;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const InputGroup = styled.div`
  margin: 20px 0;
`;

export const Label = styled.label`
  color: #353d40;
  margin-right: 10px;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
  display: block;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 15px 80px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #202731;
  color: #fff;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 0;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    background: #000;
    cursor: pointer;

    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 0.7s;
    }

    &:after {
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: 0.7s;
    }
  }
`;

export const Titulo = styled.h1`
  font-family: "Lobster", cursive;
  color: #faf566;
  text-shadow: 1px 1px 2px gray;
  font-size: 40px;
  text-align: center;
`;
