import { ErrorContext } from "@/context/errorProvider";
import { Modal } from "../Modal";
import * as S from "./styles";
import { BiError } from "react-icons/bi";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { useContext } from "react";

export const ErrorModal = () => {
  const { isOffline, isError } = useContext(ErrorContext);
  return (
    <Modal isOpen={isError}>
      <S.Content>
        <S.ErrorIcon>
          {isOffline ? (
            <RiSignalWifiErrorLine size={70} color="#FFEA19" />
          ) : (
            <BiError size={70} color="#FFEA19" />
          )}
        </S.ErrorIcon>
        <S.ErrorMessage>
          {isOffline ? "You are Offline" : "No server connection"}
        </S.ErrorMessage>
      </S.Content>
    </Modal>
  );
};
