import styled from "styled-components";

export const Button = styled.button`
  margin: 50px;
  padding: 15px 80px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #faf566;
  color: #000;
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
    color: #fff;

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

export const Mensagem = styled.p`
  color: #fff;
  text-align: center;
`;

export const ContainerDados = styled.div`
  display: flex;
  max-width: 400px;
`;

export const Dados = styled.p`
  color: #fff;
  font-size: 20px;
  width: 100%;
`;

export const Edit = styled.button`
  background-color: #faf566;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 0 auto;

  &:hover {
    background-color: #e5e055;
  }
`;

export const Cancelar = styled.button`
  background-color: #faf566;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin: 0 auto;

  &:hover {
    background-color: #e5e055;
  }
`;
