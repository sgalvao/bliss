import { GetQuestions } from "../services/getQuestions";

export const useInfinityScroll = () => {
  const loadMore = async (filter: string, offset: number) => {
    const result = await GetQuestions(filter, offset);
    return result;
  };

  return {
    loadMore,
  };
};
