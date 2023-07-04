import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { GetQuestions } from "../../services/getQuestions";
import { QuestionsType } from "../../types/api";
import { ShareModal } from "@/components/ShareModal";
import InfinityScroll from "@/components/InfinityScroll";
import { useInfinityScroll } from "@/hooks/useInfinityScroll";
import { ErrorModal } from "@/components/ErrorModal";

const QuestionsPage = () => {
  const [data, setData] = useState<QuestionsType>([]);
  const [isOpen, setIsOpen] = useState(false);
  const url = window.location.href;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");
  const navigate = useNavigate();
  const { loadMore } = useInfinityScroll();

  const handleLoadMore = async () => {
    const newData = await loadMore(filter as string, data.length);
    setData((current) => [...current, ...newData]);
  };

  useEffect(() => {
    if (!filter) {
      navigate("/");
    }

    const handleGetQuestions = async () => {
      const result = await GetQuestions(filter as string);
      console.log(result);
      setData(result);
    };
    handleGetQuestions();
  }, [filter, navigate]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <S.Container>
        <Header filterValue={filter as string} setOpen={handleOpen} />
        <S.CardContent>
          <S.QuestionList>
            {data &&
              data.map((question, index) => {
                if (index === data.length - 3) {
                  return (
                    <>
                      <S.Question
                        key={question.id}
                        onClick={() => navigate(`/questions/${question.id}`)}
                      >
                        <S.Image src={question.thumb_url} />
                        <S.Title>{question.question}</S.Title>
                      </S.Question>
                      <InfinityScroll loadMore={handleLoadMore} />
                    </>
                  );
                } else {
                  return (
                    <S.Question
                      key={question.id}
                      onClick={() => navigate(`/questions/${question.id}`)}
                    >
                      <S.Image src={question.thumb_url} />
                      <S.Title>{question.question}</S.Title>
                    </S.Question>
                  );
                }
              })}
          </S.QuestionList>
        </S.CardContent>
      </S.Container>
      <ShareModal isOpen={isOpen} onClose={() => setIsOpen(false)} url={url} />
      <ErrorModal />
    </>
  );
};

export default QuestionsPage;
