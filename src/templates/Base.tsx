import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Base = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};
