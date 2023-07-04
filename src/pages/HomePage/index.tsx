import * as S from "./styles";
import { Base } from "../../templates";
import { Input } from "../../components/Input";
import { ErrorModal } from "@/components/ErrorModal";
import { useContext, useEffect } from "react";
import { checkApiHealth } from "@/services/checkApiHealth";
import { ErrorContext } from "@/context/errorProvider";

const HomePage = () => {
  const { setIsError } = useContext(ErrorContext);

  useEffect(() => {
    const handleCheck = async () => {
      setIsError(await checkApiHealth());
    };

    handleCheck();
  });

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
