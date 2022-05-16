import { useState } from "react";
import useToggle from "./useToggle";
import { useDebounce } from "./useDebounce";

export const useFetch = (url, options = {}, delay, dependencies) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, toggleLoading] = useToggle(false);

  const fetchFunc = async () => {
    toggleLoading();
    const response = await fetch(`${url}${options}`);
    if (!response.ok) setError(response);
    else {
      const data = await response.json();
      setData(data);
    }
    toggleLoading();
  };

  useDebounce(fetchFunc, delay, dependencies);

  return [data, error, loading];
};
