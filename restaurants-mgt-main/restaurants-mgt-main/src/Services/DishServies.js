import axios from "axios";

export const Dishes = () => {
  return axios.get("http://localhost:5000//out-dish");
};
