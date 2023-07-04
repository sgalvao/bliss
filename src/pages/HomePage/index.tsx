import * as S from "./styles";
import { Base } from "../../templates";
import { Input } from "../../components/Input";
import { ErrorModal } from "@/components/ErrorModal";

const HomePage = () => {
  return (
    <Base>
      <S.Container>
        <S.Logo src="./img/logo.png" />
        <Input />
        <ErrorModal />
      </S.Container>
    </Base>
  );
};

export default HomePage;
