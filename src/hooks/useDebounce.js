import useTimeout from "./useTimeOut";
import { useEffect } from "react";

export const useDebounce = (callback, delay, dependencies) => {
  const [reset, clear] = useTimeout(callback, delay);
  useEffect(() => {
    reset();
  }, [dependencies, reset]);
  useEffect(() => clear(), []);
};
