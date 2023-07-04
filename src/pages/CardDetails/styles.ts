import styled from "styled-components";

type Props = {
  isVoted: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Image = styled.img`
  border-radius: 1rem 1rem 0 0;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
`;

export const VotesCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const VotesCount = styled.button<Props>`
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  background-color: ${({ isVoted }) => (isVoted ? "#34a853" : "#4285f4")};
  color: white;
  font-size: 1.6rem;
  font-weight: 600;

  transition: 0.4s background ease-in;

  &:disabled {
    background-color: #bdbdbd;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
export const ShareButton = styled.button`
  padding: 1rem;
  border-radius: 0.6rem;
  color: white;
  background-color: #71ec95;
  font-weight: 600;
  font-size: 1.6rem;
`;

export const ReturnButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.6rem;
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
  background-color: #eb4d2d;

  svg {
    margin-right: 0.4rem;
  }
`;
