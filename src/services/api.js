import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-grupo1.herokuapp.com", // baseURL: "http://localhost:3001",
  // baseURL: "http://localhost:3001",
});

export default api;
