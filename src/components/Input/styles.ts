import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-right: none;
  padding: 1.1rem;
  border-radius: 1rem 0rem 0rem 1rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  border-radius: 0rem 1rem 1rem 0;
  background-color: #4285f4;

  svg {
    margin-left: 1rem;
  }
`;
