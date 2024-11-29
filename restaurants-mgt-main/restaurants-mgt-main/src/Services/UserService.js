import axios from "axios";

export const InsertUser = (user) => {
  return axios.post("http://localhost:5000/user", user);
};

export const allUsers = () => {
  return axios.get("http://localhost:5000/users");
};

export const Login = (user) => {
  return axios.post("http://localhost:5000/login", user);
};
