import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 40px auto;
  max-width: 600px;
`;
export const CommentsContainer = styled.div``;
export const WriteCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  background-color: #fff;
`;
export const Write = styled.textarea`
  border: 1px solid #dae0e6;
  border-radius: 4px;
  min-height: 122px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  padding: 8px 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;
export const Button = styled.button`
  background-color: #8d8d8d;
  min-height: 24px;
  min-width: 24px;
  padding: 4px 8px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(125, 124, 124, 0.96);
    color: #c6c6c6;
  }
`;

export const Line = styled.div`
  background-color: #eceff2;
`;
