import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 1rem;
  padding: 4rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0.5rem;
  top: 0.5rem;
  border-radius: 50%;
  padding: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1rem;
  width: 100%;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #4285f4;
  padding: 1rem;
  color: white;
  font-weight: 600;
`;
