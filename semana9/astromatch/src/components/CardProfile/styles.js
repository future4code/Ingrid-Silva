import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 500px;
  position: relative;
  width: 350px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageBlur = styled(BaseImage)`
  filter: blur(10px);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Image = styled(BaseImage)`
  object-fit: contain;
  object-position: center;
  position: relative;
  z-index: 1;
`;

export const TextContainer = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
`;
export const NameAge = styled.p`
  font-weight: bold;
  font-size: 24px;
`;
export const Bio = styled.p`
  margin-top: 5px;
`;
