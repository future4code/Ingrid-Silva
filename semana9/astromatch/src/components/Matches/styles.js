import styled from "styled-components";

export const Container = styled.div`
  min-height: 600px;
  max-width: 400px;
  width: 100%;
  background-image: linear-gradient(to right, #e94b6e, #f66f4f);
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  justify-content: flex-start;
  border-radius: 20px;
`;
export const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  object-fit: cover;
`;
export const Name = styled.p`
  color: #fff;
  font-size: 20px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  overflow: auto;
  height: 400px;

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;
