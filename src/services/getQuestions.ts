/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./api/axios";
import { checkApiHealth } from "@/services/checkApiHealth";

export const GetQuestions = async (filter: string, offset = 0) => {
  try {
    await checkApiHealth();

    const result = await axios.get(
      `/questions?limit=10&offset=${offset}&filter=${filter}`
    );
    return result.data;
  } catch (err: any) {
    console.log(err);
  }
};
