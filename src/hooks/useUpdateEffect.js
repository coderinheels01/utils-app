import { useEffect, useRef } from "react";

export const useUpdateEffect = (callback, dependencies) => {
  const firstTimeRef = useRef(true);
  useEffect(() => {
    if (firstTimeRef.current) {
      firstTimeRef.current = false;
      return;
    } else {
      return callback();
    }
  }, [dependencies]);
};
