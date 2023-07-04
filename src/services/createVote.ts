import { QuestionProps } from "@/types/api";
import axios from "./api/axios";
import { checkApiHealth } from "@/services/checkApiHealth";

type Props = {
  id: number;
  params: QuestionProps;
};

export const CreateVote = async ({ id, params }: Props) => {
  try {
    await checkApiHealth();
    const result = await axios.put(`questions/${id}`, { params });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
