import styled from "styled-components";
import BackgroundImage from "../../assets/image.png";

export const Container = styled.main`
  display: flex;
  background-color: #fff;
`;
export const RightSide = styled.div`
  height: 100vh;
  width: 156px;
  min-height: 430px;
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;
`;
export const LeftSide = styled.div`
  box-sizing: content-box;
  align-self: center;
  padding: 24px;
  min-width: 280px;
  width: 100%;
  flex: 1;
`;
export const Title = styled.h2`
  font-size: 18px;
  color: #1a1a1b;
`;
export const Description = styled.p`
  font-size: 12px;
  color: #1a1a1b;
  font-weight: 400;
  line-height: 18px;
  margin: 8px 0 50px;
`;

export const InputContainer = styled.form`
  width: 280px;
`;

export const Label = styled.label`
  font-size: 10px;
  color: #a5a4a4;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 22px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fcfcfb;

  & + & {
    margin-top: 10px;
  }
`;
export const Message = styled.p`
  font-size: 12px;
  color: #1a1a1b;
  margin: 40px 0 0;

  > a {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
    color: #1384d7;
    text-decoration: none;
  }
`;
