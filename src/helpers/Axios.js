import axios from "axios";
import { useEffect, useState } from "react";

export default async function Axios(url) {
  let [data, setData] = useState([]);

  useEffect(() => {
    const getDate = async () => {
      const request = axios.create({
        baseURL: url,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDZkYmM5MDY3OTNhNjI0YjM3YjRmODI5NzI5Yjc5NiIsIm5iZiI6MTcyNzE1NTUyNS41Njk5ODUsInN1YiI6IjY2ZjI0YTQ0NTgzYzU2Y2RiMTI2NDkwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1QLjfSIklbzHk3FuKPWQN6z1hh-hHYFjRIXWjGokQA",
        },
      });
      const res = await request();
      setData(res.data);
    };
    getDate();
  }, []);

  return data;
}
