import axios from "./api/axios";

export const checkApiHealth = async () => {
  try {
    const result = await axios.get("health");

    if (result.status !== 200) {
      throw new Error("No Connection with server");
    }
    return false;
  } catch (err) {
    console.log(err);
    return true;
  }
};
