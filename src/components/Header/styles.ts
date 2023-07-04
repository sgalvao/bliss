import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: transparent;
  backdrop-filter: blur(5px);
  margin-bottom: 4rem;
`;

export const Logo = styled.img`
  width: 18rem;
  height: 8rem;
  margin-right: 4rem;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 38rem;
  margin-right: 2rem;
`;

export const ShareButton = styled.button`
  padding: 1rem;
  border-radius: 0.6rem;
  color: white;
  background-color: #71ec95;
  font-weight: 600;
  font-size: 1.6rem;
`;
