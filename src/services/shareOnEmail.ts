/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./api/axios";
import { checkApiHealth } from "@/services/checkApiHealth";

export const ShareOnEmail = async (email: string, contentUrl: string) => {
  try {
    await checkApiHealth();
    const result = await axios.post(
      `share?destination_email=${email}&content_url=${contentUrl}`
    );
    return result.data;
  } catch (err: any) {
    console.log(err);
  }
};
