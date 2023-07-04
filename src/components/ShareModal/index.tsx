import { useState } from "react";
import * as S from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { ShareOnEmail } from "@/services/shareOnEmail";
import { Modal } from "../Modal";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  url: string;
};

export const ShareModal = ({ onClose, isOpen, url }: ModalProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShare = () => {
    setIsLoading(true);
    try {
      ShareOnEmail(email, url);
      onClose();
      setIsLoading(false);
      setEmail("");
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <S.Content>
        <S.CloseButton onClick={onClose}>
          <IoCloseSharp size={20} color="red" />
        </S.CloseButton>
        <S.Title>Share the link via Email</S.Title>
        <S.Input
          placeholder="Email Address..."
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.ConfirmButton onClick={handleShare} disabled={!email}>
          Share Link
        </S.ConfirmButton>
      </S.Content>
    </Modal>
  );
};
