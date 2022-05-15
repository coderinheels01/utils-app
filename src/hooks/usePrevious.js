import { useRef } from "react";

export const usePrevious = value => {
  const currentValueRef = useRef(value);
  const previousValueRef = useRef();

  if (currentValueRef.current !== value) {
    previousValueRef.current = currentValueRef.current;
    currentValueRef.current = value;
  }
  return previousValueRef.current;
};
