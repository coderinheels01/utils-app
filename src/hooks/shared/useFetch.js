import { useEffect, useState } from "react";
import useToggle from "./useToggle";
import { useDebounce } from "./useDebounce";

export const useFetch = (url, options, delay, dependencies) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, toggleLoading] = useToggle(false);
  const [hasMore, setHasMore] = useState(false);

  const fetchFunc = async () => {
    toggleLoading();
    const response = await fetch(`${url}${options}`);
    if (!response.ok) setError(response);
    else {
      const data = await response.json();
      setData(data);
      setHasMore(data.length > 0);
    }
    toggleLoading();
  };
  useEffect(() => {
    fetchFunc().then(r => console.log(r));
  }, []);

  useDebounce(fetchFunc, delay, dependencies);

  return [data, error, loading, hasMore];
};
