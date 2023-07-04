import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding-top: 20rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  width: fit-content;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.4rem;
`;

export const Image = styled.img`
  border-radius: 1rem;
  margin-right: 1rem;
`;

export const Info = styled.div``;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;
