import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import * as S from "./styles";

type Props = {
  filterValue?: string;
  setOpen: () => void;
};

export const Header = ({ filterValue, setOpen }: Props) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Logo src={"./img/logo.png"} onClick={() => navigate("/")} />
      <S.InputContainer>
        <Input filterValue={filterValue} />
      </S.InputContainer>
      <S.ShareButton onClick={setOpen}>Share Link</S.ShareButton>
    </S.Container>
  );
};
