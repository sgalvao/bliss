/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { GetQuestionById } from "@/services/getQuestionById";
import { Base } from "@/templates";
import { QuestionProps } from "@/types/api";
import { CreateVote } from "@/services/createVote";
import { ShareModal } from "@/components/ShareModal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { checkApiHealth } from "@/services/checkApiHealth";
import { ErrorModal } from "@/components/ErrorModal";
import { ErrorContext } from "@/context/errorProvider";

const CardDetails = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<QuestionProps>({} as QuestionProps);
  const [isVoted, setIsVoted] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { setIsError } = useContext(ErrorContext);

  useEffect(() => {
    const handleCheck = async () => {
      setIsError(await checkApiHealth());
    };

    handleCheck();
  });

  const handleGetQuestionData = async () => {
    try {
      const result = await GetQuestionById(Number(questionId));
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };
  const url = window.location.href;

  const handleVote = (index: number) => {
    const updatedQuestion: QuestionProps = { ...data };
    updatedQuestion.choices[index].votes++;

    CreateVote({
      id: Number(questionId),
      params: updatedQuestion as QuestionProps,
    });

    setIsVoted(index);
  };

  useEffect(() => {
    if (isNaN(Number(questionId))) {
      navigate("/");
    } else {
      handleGetQuestionData();
    }
  }, [questionId, navigate]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Base>
      <S.Container>
        {data && (
          <>
            <S.ButtonWrapper>
              <S.ReturnButton onClick={() => navigate(-1)}>
                <AiOutlineArrowLeft size={18} />
                Back
              </S.ReturnButton>
              <S.ShareButton onClick={() => setIsOpen(true)}>
                Share
              </S.ShareButton>
            </S.ButtonWrapper>
            <S.Image src={data.image_url} />
            <S.InfoCard>
              <S.Title>{data.question}</S.Title>
              <S.VotesCard>
                {data.choices &&
                  data.choices.map((item, index) => (
                    <S.Votes key={index}>
                      <S.Name>{item.choice}</S.Name>
                      <S.VotesCount
                        isVoted={isVoted === index}
                        disabled={Boolean(isVoted) && isVoted !== index}
                        onClick={() => handleVote(index)}
                      >
                        {item.votes}
                      </S.VotesCount>
                    </S.Votes>
                  ))}
              </S.VotesCard>
            </S.InfoCard>
          </>
        )}
        <ShareModal onClose={handleClose} isOpen={isOpen} url={url} />
        <ErrorModal />
      </S.Container>
    </Base>
  );
};

export default CardDetails;
