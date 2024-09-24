import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState({
    movies: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
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
