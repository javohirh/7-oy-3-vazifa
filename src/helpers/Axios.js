import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const DefaultHeader = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDZkYmM5MDY3OTNhNjI0YjM3YjRmODI5NzI5Yjc5NiIsIm5iZiI6MTcyNzE1NTUyNS41Njk5ODUsInN1YiI6IjY2ZjI0YTQ0NTgzYzU2Y2RiMTI2NDkwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1QLjfSIklbzHk3FuKPWQN6z1hh-hHYFjRIXWjGokQA",
};
export const request = axios.create({
  baseURL: BASE_URL,
  headers: DefaultHeader,
});
