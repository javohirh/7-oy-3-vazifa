import { useState, useEffect } from "react";

export function useFetch(url, opt) {
  const [data, setData] = useState({
    movies: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDZkYmM5MDY3OTNhNjI0YjM3YjRmODI5NzI5Yjc5NiIsIm5iZiI6MTcyNzE1NTUyNS41Njk5ODUsInN1YiI6IjY2ZjI0YTQ0NTgzYzU2Y2RiMTI2NDkwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1QLjfSIklbzHk3FuKPWQN6z1hh-hHYFjRIXWjGokQA",
          },
        });
        if (res.status >= 400) {
          throw new Error(`${res.status} Not Found`);
        }
        const products = await res.json();

        setData({ movies: products, loading: false, error: "" });
      } catch (error) {
        setData({ products: [], loading: false, error: error.message });
      }
    };
    getData();
  }, [url]);
  return data;
}
