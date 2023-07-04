import * as S from "./styles";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Modal = ({ children, isOpen }: Props) => {
  return <S.Container isOpen={isOpen}>{children}</S.Container>;
};
