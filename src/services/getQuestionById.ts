import axios from "./api/axios";
import { checkApiHealth } from "@/services/checkApiHealth";

export const GetQuestionById = async (id: number) => {
  try {
    await checkApiHealth();

    const result = await axios.get(`questions/${id}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
