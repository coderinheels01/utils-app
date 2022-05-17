import { useEffect, useState } from "react";
import useToggle from "./useToggle";
import { useDebounce } from "./useDebounce";
import { usePrevious } from "./usePrevious";

export const useFetch = (url, options, delay, dependencies) => {
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const previousData = usePrevious(data);
  const [loading, toggleLoading] = useToggle(false);
  const [hasMore, setHasMore] = useState(true);

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
    fetchFunc();
  }, []);

  useDebounce(fetchFunc, delay, dependencies);
  const allData = previousData ? [...previousData, ...data] : data;
  return [allData, error, loading, hasMore];
};
